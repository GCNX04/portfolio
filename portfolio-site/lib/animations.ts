const navOrder = ['/', '/certificates', '/projects']

export function getPageAnimation(from: string, to: string) {
  const fromIndex = navOrder.indexOf(from)
  const toIndex = navOrder.indexOf(to)
  
  // right 
  const direction = toIndex > fromIndex ? 1 : -1

  return function pageAnimation() {
    document.documentElement.animate(
      [
        { transform: `translateX(${100 * direction}%)` },
        { transform: 'translateX(0)' },
      ],
      {
        duration: 300,
        easing: 'ease',
        fill: 'both',
        pseudoElement: '::view-transition-new(root)',
      }
    )

    document.documentElement.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(${-100 * direction}%)` },
      ],
      {
        duration: 300,
        easing: 'ease',
        fill: 'both',
        pseudoElement: '::view-transition-old(root)',
      }
    )
  }
}