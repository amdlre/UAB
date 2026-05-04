/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_PARTNERSHIPS_ID: string;
  readonly VITE_FORMSPREE_OPERATOR_ID: string;
  readonly VITE_FORMSPREE_TRAINING_ID: string;
  readonly VITE_BRAND_NAME: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_X_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
