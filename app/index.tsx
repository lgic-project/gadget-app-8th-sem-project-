import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(routes)/onboarding" />; // ✅ Redirect to onboarding
}