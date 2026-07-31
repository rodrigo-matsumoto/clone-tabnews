function Home() {
  // noinspection CssOverwrittenProperties
  return (
    <main>
      <span className="emoji">🚧</span>
      <h1>Em construção</h1>
      <p>Estamos trabalhando nesta página. Volte em breve!</p>

      <style jsx>{`
        main {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem;
          text-align: center;
        }

        .emoji {
          font-size: 5rem;
          line-height: 1;
        }

        h1 {
          font-size: 2rem;
          margin: 0;
        }

        p {
          font-size: 1.125rem;
          margin: 0;
          color: var(--color-text-muted);
        }
      `}</style>

      <style jsx global>{`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        :root {
          --color-bg: #ffffff;
          --color-text: #1f2328;
          --color-text-muted: #59636e;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --color-bg: #0d1117;
            --color-text: #f0f6fc;
            --color-text-muted: #9198a1;
          }
        }

        body {
          margin: 0;
          background-color: var(--color-bg);
          color: var(--color-text);
          font-family: system-ui, sans-serif;
        }
      `}</style>
    </main>
  );
}

export default Home;
