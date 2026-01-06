import { AuthShell } from "@/components/auth/AuthShell";
import { SignInMethods } from "@/components/auth/SignInMethods";

export default function LoginPage() {
  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in with email, Google, or Apple."
      footer={<span>We’ll never share your email.</span>}
    >
      <SignInMethods redirectTo="/onboarding" />
    </AuthShell>
  );
}