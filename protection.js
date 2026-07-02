/**
 * CyrusLinksHub - PC & Mobile Ultimate Content Protection
 * Blocks: Right-clicks, Copy/Cut shortcuts, DevTools triggers, and Long-presses.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. BLOCK RIGHT-CLICK & CONTEXT MENUS (PC & Mobile)
    // Stops right-click on PC and long-tap context menu paths on phones
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    // 2. BLOCK DRAGGING (PC & Mobile)
    // Stops users from dragging text/images into another browser window or notes app
    document.addEventListener('dragstart', (e) => e.preventDefault());

    // 3. BLOCK KEYBOARD HACKS (PC/Desktop Specific)
    document.addEventListener('keydown', (e) => {
        // Prevent Copy (Ctrl+C / Cmd+C) & Cut (Ctrl+X / Cmd+X)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'x' || e.key === 'C' || e.key === 'X')) {
            e.preventDefault();
            return false;
        }

        // Prevent View Source (Ctrl+U / Cmd+U)
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
            e.preventDefault();
            return false;
        }

        // Prevent Save Page (Ctrl+S / Cmd+S)
        if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
            e.preventDefault();
            return false;
        }

        // Prevent Developer Tools Inspect Key combos:
        // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
            e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c'))
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 4. BLOCK TOUCH & HOLD GESTURES (Mobile/Phone Specific)
    // Extra layer for older mobile browsers that ignore CSS rules
    document.addEventListener('touchstart', (e) => {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA' && e.target.tagName !== 'A') {
            // Stops text callouts on deep press, but allows link clicks to pass through safely
            e.target.style.webkitUserSelect = "none";
            e.target.style.webkitTouchCallout = "none";
        }
    }, { passive: true });
});
