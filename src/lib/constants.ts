export const SENSES = [
  {
    id: "sight",
    label: "البصر",
    icon: "👁️",
    color: "var(--sense-sight)",
    bgColor: "rgba(59, 130, 246, 0.1)",
  },
  {
    id: "hearing",
    label: "السمع",
    icon: "🎧",
    color: "var(--sense-hearing)",
    bgColor: "rgba(139, 92, 246, 0.1)",
  },
  {
    id: "touch",
    label: "اللمس",
    icon: "✋",
    color: "var(--sense-touch)",
    bgColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: "memory",
    label: "الذاكرة",
    icon: "🧠",
    color: "var(--sense-memory)",
    bgColor: "rgba(245, 158, 11, 0.1)",
  },
] as const;

export type SenseId = (typeof SENSES)[number]["id"];

export const NAV_ITEMS = [
  { href: "/", label: "الرئيسية", icon: "LayoutDashboard" },
  { href: "/sessions", label: "جلساتي", icon: "Calendar" },
  { href: "/settings", label: "الإعدادات", icon: "Settings" },
] as const;

export const MOCK_USER = {
  name: "أحمد محمد",
  role: "طالب جامعي",
  avatar: "/placeholder-user.jpg", // We'll rely on shadcn avatar fallback if missing
};

// Mock sessions data for the dashboard
export const RECENT_SESSIONS = [
  {
    id: "1",
    sense: "hearing",
    title: "فيزياء الموجات الصوتية",
    description: "دراسة الترددات والاهتزازات في الأذن الوسطى وتأثيرها على القوقعة.",
    progress: 40,
    timeAgo: "أمس",
  },
  {
    id: "2",
    sense: "sight",
    title: "تشريح العين البشرية",
    description: "فهم كيفية معالجة الضوء وتحويله إلى إشارات عصبية معقدة في الشبكية.",
    progress: 75,
    timeAgo: "منذ ساعتين",
  },
];
