export function getEnvVar(name, fallback = "") {
  // PUBLIC_INTERFACE
  // Return environment variable or fallback value.
  return process.env[name] || fallback;
}
