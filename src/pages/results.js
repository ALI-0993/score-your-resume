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
    <div class="w-full max-w-3xl mx-auto space-y-4">

      <!-- ── COMING SOON MODAL ── -->
      <div id="coming-soon-modal" class="hidden fixed inset-0 z-50 items-end sm:items-center justify-center p-0 sm:p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" onclick="closeComingSoonModal()"></div>
        <!-- Bottom sheet on mobile, centered dialog on sm+ -->
        <div class="relative w-full sm:max-w-sm bg-[#0c0c14] border border-[#27272a] rounded-t-2xl sm:rounded-2xl p-6 flex flex-col items-center gap-4 z-10">
          <!-- Drag handle pill (mobile only) -->
          <div class="w-10 h-1 bg-[#3f3f46] rounded-full mb-1 sm:hidden"></div>

          <!-- Sparkle icon -->
          <div class="w-14 h-14 rounded-2xl bg-[#f97316]/10 border border-[#f97316]/20 flex items-center justify-center">
            <svg class="w-7 h-7 text-[#f97316]" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
            </svg>
          </div>

          <div class="text-center">
            <div class="text-base font-semibold mb-1.5">Coming Soon</div>
            <div class="text-sm text-[#a1a1aa] leading-relaxed">
              AI-powered resume improvement is on its way — available on both
              <span class="text-white font-medium">mobile</span> and
              <span class="text-white font-medium">desktop</span>.
            </div>
          </div>

          <!-- Feature preview pills -->
          <div class="flex flex-wrap justify-center gap-2 w-full">
            <span class="text-xs bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-3 py-1 rounded-full">✦ Line-by-line rewrites</span>
            <span class="text-xs bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-3 py-1 rounded-full">✦ Keyword injection</span>
            <span class="text-xs bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-3 py-1 rounded-full">✦ One-click export</span>
          </div>

          <button onclick="closeComingSoonModal()" class="w-full py-3 text-sm bg-[#f97316] text-white rounded-xl font-medium hover:opacity-90 transition-all active:scale-[0.98]">
            Got it
          </button>
        </div>
      </div>

      <!-- ── HERO CARD ── -->
      <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-4 sm:p-6">
        <div class="flex flex-col items-center gap-5">

          <!-- Donut -->
          <div class="relative w-32 h-32 shrink-0">
            <canvas id="donut" width="128" height="128" class="w-full h-full"></canvas>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="text-3xl font-medium">${d.score}</div>
              <div class="text-xs text-[#52525b]">/100</div>
            </div>
          </div>

          <!-- Text + metrics + button -->
          <div class="w-full text-center">
            <div class="inline-flex items-center gap-2 bg-[#0d2a1f] border border-[#34d399]/25 text-[#34d399] text-xs px-3 py-1 rounded-full mb-3">
              ${d.badge}
            </div>
            <div class="text-base font-medium mb-1">${d.headline}</div>
            <div class="text-xs text-[#a1a1aa] mb-5">${d.subline}</div>

            <!-- Metrics -->
            <div class="flex justify-center gap-6 sm:gap-10 mb-5">
              <div>
                <div class="text-xs text-[#52525b] mb-1">ATS compat.</div>
                <div class="text-base font-medium text-[#a78bfa]">${d.ats_score}%</div>
              </div>
              <div>
                <div class="text-xs text-[#52525b] mb-1">Keyword match</div>
                <div class="text-base font-medium text-[#a78bfa]">${d.keyword_match}%</div>
              </div>
              <div>
                <div class="text-xs text-[#52525b] mb-1">Readability</div>
                <div class="text-base font-medium text-[#a78bfa]">${d.readability}%</div>
              </div>
            </div>

            <!-- Improve button -->
            <button onclick="openComingSoonModal()" class="w-full bg-[#f97316] text-white text-sm font-medium py-3 rounded-xl hover:opacity-90 transition-all active:scale-[0.98]">
              Improve my resume
            </button>
          </div>

          <!-- Quick actions -->
          <div class="flex gap-2 w-full pt-4 border-t border-[#27272a]">
            <button onclick="goUpload()" class="qa-btn flex-1">
              New upload
              <svg class="w-3.5 h-3.5 text-[#52525b] shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
            <button onclick="downloadPDF()" class="qa-btn flex-1">
              Download PDF
              <svg class="w-3.5 h-3.5 text-[#52525b] shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </div>

      <!-- ── INSIGHT CARDS ── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">

        <div class="insight-card">
          <div class="ic-header" style="color:#34d399">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            Strengths
          </div>
          ${d.strengths.map(s => `<div class="ic-item"><div class="ic-dot bg-[#34d399]"></div>${s}</div>`).join('')}
        </div>

        <div class="insight-card">
          <div class="ic-header" style="color:#ef4444">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
            Weaknesses
          </div>
          ${d.weaknesses.map(w => `<div class="ic-item"><div class="ic-dot bg-[#ef4444]"></div>${w}</div>`).join('')}
        </div>

        <div class="insight-card">
          <div class="ic-header" style="color:#a78bfa">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z"/></svg>
            Missing keywords
          </div>
          <div class="flex flex-wrap gap-1.5 mt-1">
            ${d.missing_keywords.map(k => `<span class="text-xs bg-[#18181b] border border-[#27272a] text-[#a1a1aa] px-2 py-0.5 rounded-full">${k}</span>`).join('')}
          </div>
        </div>

        <div class="insight-card">
          <div class="ic-header" style="color:#f59e0b">
            <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7"/></svg>
            Formatting
          </div>
          ${d.formatting_issues.map(f => `<div class="ic-item"><div class="ic-dot bg-[#f59e0b]"></div>${f}</div>`).join('')}
        </div>
      </div>

      <!-- ── DETAILED ANALYSIS ── -->
      <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-4 sm:p-5">
        <div class="text-sm font-medium mb-4">Detailed analysis</div>
        <div class="text-xs text-[#52525b] uppercase tracking-widest mb-3">Work experience refinement</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

      <!-- ── JOB MATCH ── -->
      <div class="bg-[#040A1A] border border-[#27272a] rounded-xl p-4 sm:p-5">
        <div class="flex items-center justify-between mb-4">
          <div class="text-xs text-[#52525b] uppercase tracking-widest">Job match</div>
          <div class="text-xl font-medium text-[#a78bfa]">${d.job_match}%</div>
        </div>
        <div class="space-y-3 mb-4">
          <div>
            <div class="text-xs text-[#52525b] mb-1.5">Core skills</div>
            <div class="h-1.5 bg-[#18181b] rounded-full overflow-hidden">
              <div class="h-full bg-[#a78bfa] rounded-full transition-all duration-700" style="width:${d.jm_bar1}%"></div>
            </div>
          </div>
          <div>
            <div class="text-xs text-[#52525b] mb-1.5">Advanced skills</div>
            <div class="h-1.5 bg-[#18181b] rounded-full overflow-hidden">
              <div class="h-full bg-[#3f3f46] rounded-full transition-all duration-700" style="width:${d.jm_bar2}%"></div>
            </div>
          </div>
        </div>
        <div class="bg-[#ef4444]/5 border border-[#ef4444]/15 rounded-lg p-3 text-xs text-[#a1a1aa] leading-relaxed">
          You're missing <span class="text-[#ef4444] font-medium">"${d.missing_keyword_highlight}"</span> which appears multiple times in the job description.
        </div>
      </div>

    </div>
  `

  window.openComingSoonModal = () => {
    const modal = document.getElementById('coming-soon-modal')
    modal.classList.remove('hidden')
    modal.classList.add('flex')
    document.body.style.overflow = 'hidden'
  }

  window.closeComingSoonModal = () => {
    const modal = document.getElementById('coming-soon-modal')
    modal.classList.add('hidden')
    modal.classList.remove('flex')
    document.body.style.overflow = ''
  }

  window.goUpload = async () => {
    const { navigate } = await import('../main.js')
    navigate('upload')
  }

  drawDonut(d.score)
}

function drawDonut(score) {
  const canvas = document.getElementById('donut')
  if (!canvas) return
  const size = canvas.offsetWidth || 128
  const dpr = window.devicePixelRatio || 1
  canvas.width = size * dpr
  canvas.height = size * dpr
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  const cx = size / 2, cy = size / 2
  const r = size * 0.375
  const lw = size * 0.07
  ctx.clearRect(0, 0, size, size)
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

window.downloadPDF = async () => {
  const { jsPDF } = await import('jspdf')
  const d = window._analysisResult
  if (!d) return
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.text('ATS Score Report', 20, 20)
  doc.setFontSize(12)
  doc.text(`Score: ${d.score}/100`, 20, 35)
  doc.text(`ATS Compatibility: ${d.ats_score}%`, 20, 45)
  doc.text(`Keyword Match: ${d.keyword_match}%`, 20, 55)
  doc.text(`Readability: ${d.readability}%`, 20, 65)
  doc.text(`Job Match: ${d.job_match}%`, 20, 75)
  doc.setFontSize(14)
  doc.text('Strengths:', 20, 90)
  doc.setFontSize(11)
  d.strengths.forEach((s, i) => doc.text(`• ${s}`, 25, 100 + i * 10))
  doc.setFontSize(14)
  doc.text('Weaknesses:', 20, 135)
  doc.setFontSize(11)
  d.weaknesses.forEach((w, i) => doc.text(`• ${w}`, 25, 145 + i * 10))
  doc.setFontSize(14)
  doc.text('Missing Keywords:', 20, 185)
  doc.setFontSize(11)
  doc.text(d.missing_keywords.join(', '), 25, 195)
  doc.save('ats-score-report.pdf')
}