/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORMSPREE_PARTNERSHIPS_ID: string;
  readonly VITE_FORMSPREE_OPERATOR_ID: string;
  readonly VITE_FORMSPREE_TRAINING_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
