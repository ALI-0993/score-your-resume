export function renderUpload() {
  document.getElementById('page').innerHTML = `
    <div class="w-full">

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">ATS Fit Score</h1>
        <p class="text-[#a1a1aa] text-sm">See how well your resume aligns with recruiter systems before you apply.</p>
      </div>

      <div class="flex flex-col gap-4">

        <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-8 h-8 bg-[#1e1535] rounded-lg flex items-center justify-center">
              <svg class="w-4 h-4 text-[#a78bfa]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <div>
              <div class="text-sm font-medium">Your Resume</div>
              <div class="text-xs text-[#52525b]">Paste your resume text or upload a file.</div>
            </div>
            <div class="flex gap-2 ml-auto">
              <button id="tab-upload" onclick="switchTab('upload')" class="tab-btn active-tab">Upload PDF</button>
              <button id="tab-paste" onclick="switchTab('paste')" class="tab-btn">Paste text</button>
            </div>
          </div>

          <div id="panel-upload">
            <label class="flex items-center justify-center gap-4 bg-[#030711] border border-dashed border-[#3f3f46] rounded-lg px-8 py-5 cursor-pointer hover:border-[#a78bfa] transition-all">
              <input type="file" class="hidden" accept=".pdf,.txt,.docx" id="file-input" onchange="handleFile(this.files[0])">
              <svg class="w-5 h-5 text-[#a78bfa]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
              <div>
                <div class="text-sm text-[#a1a1aa]"><span class="text-[#a78bfa]">Click to upload</span> or drag and drop</div>
                <div class="text-xs text-[#52525b] mt-0.5">PDF, TXT, DOCX · Max 5MB</div>
              </div>
              <div id="file-name" class="ml-auto text-xs text-[#a1a1aa]"></div>
            </label>
          </div>

          <div id="panel-paste" class="hidden">
            <textarea id="resume-text" class="w-full bg-[#030711] border border-[#27272a] rounded-lg p-3 text-sm text-white placeholder-[#52525b] outline-none focus:border-[#a78bfa] transition-all resize-none" style="height:120px" placeholder="Paste your full resume text here..."></textarea>
          </div>

          <div id="resume-preview" class="mt-3 text-xs text-[#52525b] flex items-center gap-2">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            No resume loaded yet
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">

          <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-6 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-sm font-medium">Job Description</div>
                <div class="text-xs text-[#52525b] mt-0.5">Paste the job description for a tailored match score.</div>
              </div>
              <span class="text-xs bg-[#040A1A] border border-[#27272a] text-[#a1a1aa] px-2 py-0.5 rounded-full">Optional</span>
            </div>
            <textarea id="jd-text" class="w-full flex-1 bg-[#030711] border border-[#27272a] rounded-lg p-3 text-sm text-white placeholder-[#52525b] outline-none focus:border-[#a78bfa] transition-all resize-none" style="height:160px" placeholder="Paste job description here..."></textarea>
            <div class="text-xs text-[#34d399] flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              Adding a job description improves match accuracy
            </div>
          </div>

          <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-6 flex flex-col gap-4">
            <div>
              <div class="text-sm font-medium">Run ATS Check</div>
              <div class="text-xs text-[#52525b] mt-0.5">Analyze your resume against ATS systems instantly.</div>
            </div>

            <div class="grid grid-cols-3 gap-3">
              <div class="bg-[#030711] rounded-lg p-3 text-center">
                <div class="text-[#a78bfa] text-base font-medium">AI</div>
                <div class="text-xs text-[#52525b] mt-1">Powered</div>
              </div>
              <div class="bg-[#030711] rounded-lg p-3 text-center">
                <div class="text-[#34d399] text-base font-medium">ATS</div>
                <div class="text-xs text-[#52525b] mt-1">Optimized</div>
              </div>
              <div class="bg-[#030711] rounded-lg p-3 text-center">
                <div class="text-[#f59e0b] text-base font-medium">100</div>
                <div class="text-xs text-[#52525b] mt-1">Max score</div>
              </div>
            </div>

            <div id="error-box" class="hidden bg-red-950/30 border border-red-800/40 text-red-400 text-xs rounded-lg px-3 py-2"></div>
            <div id="status-bar" class="hidden bg-[#040A1A] border border-[#27272a] rounded-lg px-3 py-2 flex items-center gap-2">
              <div class="w-3.5 h-3.5 border-2 border-[#3f3f46] border-t-[#a78bfa] rounded-full animate-spin"></div>
              <div class="text-xs text-[#a1a1aa]" id="status-text">Analyzing...</div>
            </div>

            <div class="flex gap-3">
              <button onclick="loadDemo()" class="flex-1 py-2.5 text-sm border border-[#3f3f46] text-[#a1a1aa] rounded-lg hover:border-[#a78bfa] hover:text-[#a78bfa] transition-all">Load demo</button>
              <button id="analyze-btn" onclick="runAnalysis()" class="flex-1 py-2.5 text-sm bg-[#f97316] text-white rounded-lg hover:opacity-90 transition-all font-medium">Run ATS Check</button>
            </div>
            <div class="text-xs text-[#52525b] text-center">Powered by Gemini AI · Your data is private</div>
          </div>

        </div>
      </div>
    </div>
  `
  bindUploadEvents()
}

function bindUploadEvents() {
  window.switchTab = (t) => {
    document.getElementById('panel-upload').classList.toggle('hidden', t !== 'upload')
    document.getElementById('panel-paste').classList.toggle('hidden', t !== 'paste')
    document.getElementById('tab-upload').classList.toggle('active-tab', t === 'upload')
    document.getElementById('tab-paste').classList.toggle('active-tab', t === 'paste')
  }

  window.handleFile = async (file) => {
    if (!file) return
    window._resumeFile = file
    document.getElementById('file-name').textContent = '✓ ' + file.name
    document.getElementById('resume-preview').innerHTML = `
      <svg class="w-3.5 h-3.5 text-[#34d399]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span class="text-white font-medium">${file.name}</span>
      <span class="text-[#52525b]">·</span>
      <span>${(file.size / 1024).toFixed(0)} KB</span>
      <span class="text-[#34d399]">· Ready</span>`
    if (file.type === 'application/pdf') {
      const { extractTextFromPDF } = await import('../api/gemini.js')
      window._resumeText = await extractTextFromPDF(file)
    } else {
      window._resumeText = await file.text()
    }
  }

  window.loadDemo = () => {
    window._resumeText = `Alex Chen — Senior Frontend Engineer
alex.chen@email.com

EXPERIENCE
Senior Frontend Engineer — TechCorp (2021–Present)
- Responsible for managing the frontend team and delivering features
- Worked on React applications and improved some performance metrics

Frontend Developer — StartupXYZ (2019–2021)
- Built web interfaces using JavaScript and CSS

EDUCATION
B.S. Computer Science — State University (2019)

SKILLS
JavaScript, React, HTML, CSS, Git, Node.js`
    document.getElementById('panel-paste').classList.remove('hidden')
    document.getElementById('panel-upload').classList.add('hidden')
    document.getElementById('tab-paste').classList.add('active-tab')
    document.getElementById('tab-upload').classList.remove('active-tab')
    document.getElementById('resume-text').value = window._resumeText
    document.getElementById('jd-text').value = 'Looking for a Senior Frontend Engineer with React, TypeScript, Node.js, System Design, AWS, and GraphQL experience.'
    document.getElementById('resume-preview').innerHTML = `
      <svg class="w-3.5 h-3.5 text-[#34d399]" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
      <span class="text-[#34d399]">Demo resume loaded successfully</span>`
  }

  window.runAnalysis = async () => {
    const resume = document.getElementById('resume-text')?.value || window._resumeText || ''
    const jd = document.getElementById('jd-text')?.value || ''
    if (!resume || resume.trim().length < 50) {
      const eb = document.getElementById('error-box')
      eb.classList.remove('hidden')
      eb.textContent = 'Please upload a resume or paste at least 50 characters.'
      setTimeout(() => eb.classList.add('hidden'), 4000)
      return
    }
    document.getElementById('error-box').classList.add('hidden')
    document.getElementById('analyze-btn').disabled = true
    document.getElementById('status-bar').classList.remove('hidden')
    const msgs = ['Reading your resume...', 'Checking ATS compatibility...', 'Analyzing keywords...', 'Generating suggestions...']
    let i = 0
    const ticker = setInterval(() => {
      document.getElementById('status-text').textContent = msgs[++i % msgs.length]
    }, 1800)
    try {
      const { analyzeResume } = await import('../api/gemini.js')
      const result = await analyzeResume(resume, jd)
      clearInterval(ticker)
      document.getElementById('status-bar').classList.add('hidden')
      document.getElementById('analyze-btn').disabled = false
      window._analysisResult = result
      const { navigate } = await import('../main.js')
      navigate('results')
    } catch (err) {
      clearInterval(ticker)
      document.getElementById('status-bar').classList.add('hidden')
      document.getElementById('analyze-btn').disabled = false
      const eb = document.getElementById('error-box')
      eb.classList.remove('hidden')
      eb.textContent = 'Analysis failed: ' + (err.message || 'Unknown error')
    }
  }
}