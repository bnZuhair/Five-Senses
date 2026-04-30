import { MOCK_USER } from "@/lib/constants";

export function WelcomeHeader() {
  const firstName = MOCK_USER.name.split(" ")[0];
  
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">
          مرحباً بك مجدداً، {firstName}
        </h2>
        <p className="text-text-secondary">
          تابع تقدمك المعرفي اليوم.
        </p>
      </div>
    </div>
  );
}
