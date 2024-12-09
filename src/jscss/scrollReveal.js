//fade in
export function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  });

  elements.forEach((el) => observer.observe(el));
}

// app.jsx
//  useEffect(() => {
//   initScrollReveal(); // Käynnistää scroll-reveal-toiminnon
// }, []);
