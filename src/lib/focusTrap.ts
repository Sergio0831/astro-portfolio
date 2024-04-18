const candidateSelectors: string[] = [
  'a[href]',
  'button',
  '[tabindex]',
  '[contenteditable]:not([contenteditable="false"])',
];

function isHidden(node: HTMLElement): boolean {
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

function getAllTabbingElements(parentElem: HTMLElement): HTMLElement[] {
  const currentActiveElement = document.activeElement as HTMLElement;
  const tabbableNodes = parentElem.querySelectorAll<HTMLElement>(candidateSelectors.join(','));
  const onlyTabbable: HTMLElement[] = [];
  for (let i = 0; i < tabbableNodes.length; i++) {
    const node = tabbableNodes[i];
    if (currentActiveElement === node || (getTabindex(node) > -1 && !isHidden(node))) {
      onlyTabbable.push(node);
    }
  }
  return onlyTabbable;
}

function tabTrappingKey(event: KeyboardEvent, parentElem: HTMLElement): boolean {
  // check if current event keyCode is tab
  if (!event || event.key !== 'Tab') return false;

  if (!parentElem || !parentElem.contains) {
    if (process && process.env.NODE_ENV === 'development') {
      console.warn('focus-trap-js: parent element is not defined');
    }
    return false;
  }

  if (!parentElem.contains(event.target as Node)) {
    return false;
  }

  const allTabbingElements = getAllTabbingElements(parentElem);
  const firstFocusableElement = allTabbingElements[0];
  const lastFocusableElement = allTabbingElements[allTabbingElements.length - 1];

  if (event.shiftKey && event.target === firstFocusableElement) {
    lastFocusableElement.focus();
    event.preventDefault();
    return true;
  } else if (!event.shiftKey && event.target === lastFocusableElement) {
    firstFocusableElement.focus();
    event.preventDefault();
    return true;
  }
  return false;
}

function getTabindex(node: HTMLElement): number {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);

  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return tabIndex correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.

  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function isContentEditable(node: HTMLElement): string | null {
  return node.getAttribute('contentEditable');
}

export default tabTrappingKey;
