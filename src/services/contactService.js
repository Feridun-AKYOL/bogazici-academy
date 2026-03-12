export async function submitContactForm(payload) {
  await new Promise((resolve) => setTimeout(resolve, 600))
  return {
    ok: true,
    payload,
  }
}
