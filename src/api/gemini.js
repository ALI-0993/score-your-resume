import * as pdfjsLib from "pdfjs-dist";
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url,
).toString();

export async function extractTextFromPDF(file) {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  let text = "";
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item) => item.str).join(" ") + "\n";
  }
  return text;
}

const API_URL = "/api/analyze";

export async function analyzeResume(resume, jd) {
  const prompt = `You are an expert ATS resume scorer and career coach. Analyze the resume below and return a JSON object ONLY. No markdown, no backticks, no explanation.

Resume:
"""
${resume.substring(0, 3000)}
"""

${jd ? `Job Description:\n"""\n${jd.substring(0, 1500)}\n"""` : ''}

Return exactly this JSON structure:
{
  "score": <integer 0-100>,
  "ats_score": <integer 0-100>,
  "keyword_match": <integer 0-100>,
  "readability": <integer 0-100>,
  "job_match": <integer 0-100>,
  "badge": "<short status like 'High match potential'>",
  "headline": "<one sentence summary of resume quality>",
  "subline": "<one sentence about main area to improve>",
  "strengths": ["<strength 1>", "<strength 2>", "<strength 3>"],
  "weaknesses": ["<weakness 1>", "<weakness 2>", "<weakness 3>"],
  "missing_keywords": ["<keyword 1>", "<keyword 2>", "<keyword 3>", "<keyword 4>"],
  "formatting_issues": ["<issue 1>", "<issue 2>"],
  "before_text": "<a weak sentence from the resume>",
  "after_text": "<improved version with metrics and action verbs>",
  "jm_bar1": <integer 0-100>,
  "jm_bar2": <integer 0-100>,
  "missing_keyword_highlight": "<most important missing keyword>"
}`

  const res = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error?.message || 'API error')
  }

  const data = await res.json()
  if (data.error) throw new Error(data.error.message || 'API error')
  const raw = data.choices[0].message.content
  const clean = raw.replace(/```json|```/g, '').trim()
  return JSON.parse(clean)
}
