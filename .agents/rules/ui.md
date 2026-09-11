# UI Rules

## Radix UI Components

- ALL visual components of this project MUST come from Radix UI primitives and their official ecosystem (shadcn/ui building on Radix UI is allowed when the underlying primitives are Radix-based).
- The project MUST NOT contain custom visual components. Do not hand-build buttons, dialogs, dropdowns, toasts, tooltips, tabs, switches, etc. Always compose them from Radix UI primitives.
- ALL Radix UI primitives can be found with proper usage at: https://www.radix-ui.com/

## Conflict Resolution

- If the desired behavior of a component conflicts with the component at hand, NEVER improvise or create a custom component to work around it.
- Instead, consult the official Radix UI documentation at https://www.radix-ui.com/ and follow the documented behavior and API.
- Render HTML attributes and root styling only when supported by the Radix primitive's documented API.