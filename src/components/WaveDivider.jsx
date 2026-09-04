function WaveDivider({ from, to, flip = false }) {
  return (
    <div
      className={`wave-divider ${flip ? 'is-flip' : ''}`}
      style={{ background: from }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0,64 C180,92 380,28 600,46 C820,64 1020,104 1220,84 C1330,73 1400,66 1440,62 L1440,120 L0,120 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}

export default WaveDivider