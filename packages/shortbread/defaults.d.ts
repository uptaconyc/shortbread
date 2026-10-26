/** Set denied defaults synchronously before Google tags or GTM execute. */
export function initializeConsentDefaults(): void;
/** Inline script for the document head. React effects execute too late for head tags. */
export const consentDefaultsScript: string;
