
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  FolderKanban,
  Wallet,
  Users,
  GraduationCap,
  BarChart3,
  Menu,
} from "lucide-react";

const features = [
  {
    icon: FolderKanban,
    title: "Project Management",
    description:
      "Organize your freelance projects, track progress, and manage deadlines from one place.",
  },
  {
    icon: Users,
    title: "Client Management",
    description:
      "Keep all your client information, project details, and communication organized.",
  },
  {
    icon: Wallet,
    title: "Earnings & Finance",
    description:
      "Track your income, payments, budgets, and financial performance easily.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Understand your productivity and business performance with visual reports.",
  },
  {
    icon: GraduationCap,
    title: "Learning Resources",
    description:
      "Improve your freelancing skills with beginner-friendly educational guides.",
  },
  {
    icon: LayoutDashboard,
    title: "All-in-One Workspace",
    description:
      "Manage your freelance career through one simple and organized workspace.",
  },
];

const benefits = [
  "Manage all projects in one place",
  "Track earnings and payments",
  "Organize your clients",
  "Monitor project deadlines",
];

export default function HomePage() {
  return (
    <main className="h-full  overflow-hidden bg-[#09090f] text-white">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-[#09090f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="flex items-center gap-2">
            <div className="rounded-xl bg-violet-600 p-2">
              <LayoutDashboard size={22} />
            </div>
            <span className="text-xl font-bold">
              Freelance<span className="text-violet-400">Hub</span>
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-violet-400">Home</a>
            <a href="#features" className="hover:text-violet-400">Features</a>
            <a href="#about" className="hover:text-violet-400">About</a>
            <a href="#contact" className="hover:text-violet-400">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard"
              className="hidden rounded-xl px-4 py-2 text-sm text-gray-300 hover:text-white sm:block"
            >
              Login
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold hover:bg-violet-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative px-6 py-24 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
              <span className="h-2 w-2 rounded-full bg-violet-400" />
              Your Complete Freelance Workspace
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Manage Your Freelance Career
              <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                All in One Place.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-gray-400">
              FreelanceHub helps you manage projects, organize clients,
              track earnings, and improve your freelancing skills
              through one powerful workspace.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold transition hover:bg-violet-700"
              >
                Explore Workspace
                <ArrowRight size={19} />
              </Link>

              <a
                href="#features"
                className="rounded-xl border border-gray-700 px-7 py-4 font-semibold text-gray-200 transition hover:border-violet-500"
              >
                Explore Features
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={17} className="shrink-0 text-violet-400" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-3xl bg-violet-600/20 blur-3xl" />

            <div className="relative rounded-2xl border border-gray-700 bg-[#171720] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-gray-700 pb-5">
                <div>
                  <p className="text-sm text-gray-400">Workspace Overview</p>
                  <h2 className="mt-1 text-xl font-bold">Dashboard</h2>
                </div>
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <LayoutDashboard size={23} />
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-700 bg-[#20202b] p-4">
                  <Wallet className="text-violet-400" size={22} />
                  <p className="mt-4 text-xs text-gray-400">Total Earnings</p>
                  <h3 className="mt-1 text-2xl font-bold">$12,450</h3>
                </div>

                <div className="rounded-xl border border-gray-700 bg-[#20202b] p-4">
                  <FolderKanban className="text-blue-400" size={22} />
                  <p className="mt-4 text-xs text-gray-400">Active Projects</p>
                  <h3 className="mt-1 text-2xl font-bold">08</h3>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-gray-700 bg-[#20202b] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Project Progress</h3>
                  <span className="text-xs text-violet-400">This month</span>
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    { name: "Website Development", value: 85 },
                    { name: "Mobile App Design", value: 65 },
                    { name: "Landing Page", value: 45 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-gray-400">{item.value}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-violet-500"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-xl border border-gray-700 bg-[#20202b] p-4">
                <div className="rounded-lg bg-green-500/10 p-2 text-green-400">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium">Everything organized!</p>
                  <p className="text-xs text-gray-400">Your workspace is ready.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="font-semibold text-violet-400">OUR FEATURES</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Everything You Need to Grow
            </h2>
            <p className="mt-5 leading-7 text-gray-400">
              Powerful tools designed to make your freelance journey
              easier, smarter, and more organized.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-800 bg-[#14141d] p-7 transition hover:-translate-y-1 hover:border-violet-500/50"
                >
                  <div className="mb-6 inline-flex rounded-xl bg-violet-500/10 p-4 text-violet-400">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-gray-800 bg-gradient-to-br from-violet-950/50 to-[#14141d] p-8 text-center sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Build a Smarter Freelance Workflow
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            FreelanceHub brings your projects, clients, finances,
            and learning resources together so you can focus on
            building a better freelance career.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold hover:bg-violet-700"
          >
            Get Started Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="text-xl font-bold">
            Freelance<span className="text-violet-400">Hub</span>
          </Link>

          <p className="text-center text-sm text-gray-500">
            © 2026 FreelanceHub. All rights reserved.
          </p>

          <a href="mailto:contact@freelancehub.com" className="text-sm text-gray-400 hover:text-violet-400">
            Contact Us
          </a>
        </div>
      </footer>
    </main>
  );
}
