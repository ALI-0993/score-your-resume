export function renderResults() {
  const d = window._analysisResult || {
    score: 82, ats_score: 90, keyword_match: 75, readability: 85,
    job_match: 78, badge: 'High match potential',
    headline: 'Good match for mid-level roles.',
    subline: 'Needs improvement in keyword optimization and formatting.',
    strengths: ['Strong action verbs', 'Quantified achievements', 'Clear structure'],
    weaknesses: ['Missing technical keywords', 'Vague job descriptions', 'No metrics'],
    missing_keywords: ['React', 'Node.js', 'System Design', 'TypeScript'],
    formatting_issues: ['Inconsistent spacing', 'Paragraph length'],
    before_text: 'Responsible for managing the frontend team and delivering features.',
    after_text: 'Led a cross-functional team of 5 to deploy 12+ production features, increasing user engagement by 25%.',
    jm_bar1: 85, jm_bar2: 55,
    missing_keyword_highlight: 'Cloud Architecture'
  }

  document.getElementById('page').innerHTML = `
    <div class="w-full space-y-4">

      <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-6 grid grid-cols-[auto_1fr_auto] gap-6 items-center">
        <div class="relative w-36 h-36">
            <canvas id="donut" width="144" height="144"></canvas>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <div class="text-3xl font-medium">${d.score}</div>
                <div class="text-xs text-[#52525b]">/100</div>
            </div>
        </div>
        <div>
          <div class="inline-flex items-center gap-2 bg-[#0d2a1f] border border-[#34d399]/25 text-[#34d399] text-xs px-3 py-1 rounded-full mb-3">${d.badge}</div>
          <div class="text-lg font-medium mb-1">${d.headline}</div>
          <div class="text-sm text-[#a1a1aa] mb-4">${d.subline}</div>
          <div class="flex gap-6">
            <div><div class="text-xs text-[#52525b] mb-1">ATS compat.</div><div class="text-base font-medium text-[#a78bfa]">${d.ats_score}%</div></div>
            <div><div class="text-xs text-[#52525b] mb-1">Keyword match</div><div class="text-base font-medium text-[#a78bfa]">${d.keyword_match}%</div></div>
            <div><div class="text-xs text-[#52525b] mb-1">Readability</div><div class="text-base font-medium text-[#a78bfa]">${d.readability}%</div></div>
          </div>
          <button class="mt-4 w-full bg-[#f97316] text-white text-sm font-medium py-2.5 rounded-lg hover:opacity-90 transition-all">Improve my resume</button>
        </div>
        <div class="flex flex-col gap-2 min-w-[180px]">
          <div class="text-xs text-[#52525b] uppercase tracking-widest mb-1">Quick actions</div>
          <button onclick="goUpload()" class="qa-btn">
            New upload
            <svg class="w-3.5 h-3.5 text-[#52525b]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <button class="qa-btn">
            Download PDF
            <svg class="w-3.5 h-3.5 text-[#52525b]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <button class="qa-btn">
            Re-analyze
            <svg class="w-3.5 h-3.5 text-[#52525b]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-3">
        <div class="insight-card">
          <div class="ic-header" style="color:#34d399">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Strengths
          </div>
          ${d.strengths.map(s => `<div class="ic-item"><div class="ic-dot bg-[#34d399]"></div>${s}</div>`).join('')}
        </div>
        <div class="insight-card">
          <div class="ic-header" style="color:#ef4444">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Weaknesses
          </div>
          ${d.weaknesses.map(w => `<div class="ic-item"><div class="ic-dot bg-[#ef4444]"></div>${w}</div>`).join('')}
        </div>
        <div class="insight-card">
          <div class="ic-header" style="color:#a78bfa">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"/></svg>
            Missing keywords
          </div>
          <div class="flex flex-wrap gap-1 mt-1">
            ${d.missing_keywords.map(k => `<span class="text-xs bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-2 py-0.5 rounded-full">${k}</span>`).join('')}
          </div>
        </div>
        <div class="insight-card">
          <div class="ic-header" style="color:#f59e0b">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            Formatting
          </div>
          ${d.formatting_issues.map(f => `<div class="ic-item"><div class="ic-dot bg-[#f59e0b]"></div>${f}</div>`).join('')}
        </div>
      </div>

      <div class="grid grid-cols-[1fr_300px] gap-4">
        <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-5">
          <div class="text-sm font-medium mb-4">Detailed analysis</div>
          <div class="text-xs text-[#52525b] uppercase tracking-widest mb-3">Work experience refinement</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="bg-[#18181b] border border-[#27272a] rounded-lg p-4">
              <div class="text-xs font-medium text-[#ef4444] uppercase tracking-widest mb-2">Before</div>
              <div class="text-xs text-[#a1a1aa] italic leading-relaxed">"${d.before_text}"</div>
            </div>
            <div class="bg-[#18181b] border border-[#27272a] rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="text-xs font-medium text-[#34d399] uppercase tracking-widest">After</div>
                <span class="text-xs bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] px-2 py-0.5 rounded-full">Recommended</span>
              </div>
              <div class="text-xs text-[#34d399] italic leading-relaxed">"${d.after_text}"</div>
            </div>
          </div>
        </div>

        <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-5">
          <div class="flex items-center justify-between mb-4">
            <div class="text-xs text-[#52525b] uppercase tracking-widest">Job match</div>
            <div class="text-xl font-medium text-[#a78bfa]">${d.job_match}%</div>
          </div>
          <div class="space-y-3 mb-4">
            <div>
              <div class="text-xs text-[#52525b] mb-1.5">Core skills</div>
              <div class="h-1.5 bg-[#18181b] rounded-full overflow-hidden">
                <div class="h-full bg-[#a78bfa] rounded-full" style="width:${d.jm_bar1}%"></div>
              </div>
            </div>
            <div>
              <div class="text-xs text-[#52525b] mb-1.5">Advanced skills</div>
              <div class="h-1.5 bg-[#18181b] rounded-full overflow-hidden">
                <div class="h-full bg-[#3f3f46] rounded-full" style="width:${d.jm_bar2}%"></div>
              </div>
            </div>
          </div>
          <div class="bg-[#ef4444]/5 border border-[#ef4444]/15 rounded-lg p-3 text-xs text-[#a1a1aa]">
            You're missing <span class="text-[#ef4444] font-medium">"${d.missing_keyword_highlight}"</span> which appears multiple times in the job description.
          </div>
        </div>
      </div>

    </div>
  `

  window.goUpload = async () => {
    const { navigate } = await import('../main.js')
    navigate('upload')
  }

  drawDonut(d.score)
}

function drawDonut(score) {
  const canvas = document.getElementById('donut')
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const cx = 72, cy = 72, r = 54, lw = 9
  ctx.clearRect(0, 0, 144, 144)
  ctx.beginPath()
  ctx.arc(cx, cy, r, -Math.PI / 2, Math.PI * 2 - Math.PI / 2)
  ctx.strokeStyle = '#27272a'
  ctx.lineWidth = lw
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(cx, cy, r, -Math.PI / 2, (score / 100) * Math.PI * 2 - Math.PI / 2)
  ctx.strokeStyle = '#f97316'
  ctx.lineWidth = lw
  ctx.lineCap = 'round'
  ctx.stroke()
}