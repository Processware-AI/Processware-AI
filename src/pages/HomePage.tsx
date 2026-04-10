import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Lightbulb, 
  ShieldCheck, 
  Edit3,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="relative px-6 py-24 md:py-32 overflow-hidden bg-surface">
    <div className="max-w-7xl mx-auto flex flex-col gap-8 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 bg-surface-container-low w-fit px-4 py-1.5 rounded-full mb-2"
      >
        <div className="pulse-agent" />
        <span className="text-xs font-bold text-on-surface-variant tracking-wider uppercase">AI-Powered Compliance Agent</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold text-primary tracking-tight leading-[1.1]"
      >
        국제표준 인증,<br />사람이 다 할 필요 없습니다.
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-on-surface-variant max-w-xl leading-relaxed"
      >
        AI 기반 규제 분석으로 복잡한 인증 절차를 80% 이상 단축하세요. ISO, ASPICE, IEC 등 모든 도메인의 표준을 완벽히 지원합니다.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 mt-4"
      >
        <Link to="/automotive" className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg active:scale-95 transition-all text-center">
          우리 도메인에 맞는 서비스 보기
        </Link>
      </motion.div>
    </div>
    <div className="absolute top-0 right-0 w-full h-full -z-0 opacity-20 pointer-events-none">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CuuB41LAmEe_xt0_5iAvLn78CW_6A4iEtHLgqrtamJTBwwWIot7LzdSk0x0qetTDftDNLMshSMKbjLw-UbE8YApdRTWEHc75tRkv0HnTpVAR1T5gy0MkRVb0z8NHhWboEI-NzNPkuLBZohFes9dxlD8yfqIVTzISGeW5Ye1Dc4yOkOXS_3BR5jcQhZk7hBL5AbHjn7ZX76uDXW3Q3Vgt66DDfN6cdFjoUGXl96KR0DZ6tpOmD2W1iTgOQGK9e4YUgOWUiiI7cj2R" 
        referrerPolicy="no-referrer"
      />
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="px-6 py-20 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-4">비효율적인 인증 프로세스의 한계</h2>
        <p className="text-on-surface-variant font-medium">전통적인 수동 방식은 더 이상 시장의 속도를 따라올 수 없습니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: <FileText className="w-8 h-8 text-primary" />,
            title: "문서화 작업의 늪",
            desc: "수천 페이지에 달하는 요구사항 정의서와 추적표 작성에 개발 시간의 40% 이상이 낭비됩니다.",
            stat: "40%+",
            statDesc: "개발 리소스 매몰"
          },
          {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "전문 인력 부족",
            desc: "도메인 지식과 규제 대응 능력을 동시에 갖춘 전문 인력을 확보하는 것은 하늘의 별 따기입니다.",
            stat: "82%",
            statDesc: "기업들의 전문 인력난 체감"
          },
          {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "고액의 컨설팅 비용",
            desc: "회당 수천만 원에 달하는 외부 컨설팅은 비용 부담뿐만 아니라 지식 자산화도 어렵게 만듭니다.",
            stat: "₩5,000만+",
            statDesc: "평균 프로젝트 컨설팅 단가"
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_4px_16px_rgba(0,30,64,0.04)] flex flex-col gap-4"
          >
            {item.icon}
            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
            <div className="mt-4 pt-4 border-t border-outline-variant/15">
              <span className="text-2xl font-black text-primary">{item.stat}</span>
              <span className="text-xs text-on-surface-variant block">{item.statDesc}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="px-6 py-24 bg-surface">
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
      <div className="lg:w-1/3">
        <h2 className="text-4xl font-extrabold text-primary tracking-tighter leading-tight mb-6">AI 기반<br />엔드투엔드 솔루션</h2>
        <p className="text-on-surface-variant mb-8 leading-relaxed">단순한 어시스턴트가 아닙니다. AI 규제 전문가가 귀사의 워크플로우에 직접 통합됩니다.</p>
        <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxIuz-B68U_lvat_2npAwcA1zNjE6xzSettce_PTyzqDjf_dwJEm0Ah_TY36Q_XF0oG-PukDxDIWdEieH0k1aR-4ZYwVD_9qfj3_Ke-6h0qOX_FdvnGgLtbnu0eGS6eJrbXvMm61EvlySQ8vTfpjxCuzOpkeoga9fxRreHIshDadFo6Uiv9HfgBZ_tyBbgDtlqWA0fQAxqmhjnKe1wgZynAZ5JHMwp0PzOWIbS7G0m3Fmq-S1B2sFWeN26fJOAmtA2MJ-Go1zohSH4" 
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      <div className="lg:w-2/3 flex flex-col gap-6">
        {[
          {
            icon: <Lightbulb className="w-6 h-6 text-primary" />,
            title: "AI 컨설팅 (Gap Analysis)",
            badge: "Success +95%",
            desc: "현행 프로세스와 타겟 표준 간의 차이를 AI가 실시간으로 분석하여 최단 경로의 이행 로드맵을 제시합니다."
          },
          {
            icon: <Edit3 className="w-6 h-6 text-primary" />,
            title: "AI 자동 문서 생성",
            badge: "Speed x10",
            desc: "소스코드와 설계 문서를 기반으로 인증에 필요한 정적 분석 보고서 및 규제 대응 문서를 자동 생성합니다."
          },
          {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "AI 트레이닝 및 모의 심사",
            badge: "Accuracy 99%",
            desc: "실제 심사원 수준의 AI가 가상 인터뷰와 문서 검증을 통해 본 심사 통과 가능성을 극대화합니다."
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 10 }}
            className="group bg-surface-container p-1 rounded-xl transition-all hover:bg-primary-fixed/30"
          >
            <div className="bg-surface-container-lowest p-8 rounded-lg flex flex-col md:flex-row gap-8 items-start">
              <div className="bg-primary-container/10 p-4 rounded-xl">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                  <span className="text-xs font-bold text-primary bg-primary-fixed px-3 py-1 rounded-full">{item.badge}</span>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const DomainSection = () => (
  <section className="px-6 py-20 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-primary mb-4">도메인별 특화 솔루션</h2>
        <p className="text-on-surface-variant">각 산업군에 최적화된 AI 모델이 규제 대응을 지원합니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline-variant/15 rounded-2xl overflow-hidden border border-outline-variant/15">
        {[
          {
            sector: "Sector 01",
            title: "Automotive SW",
            desc: "ISO 26262, ASPICE, ISO 21434 규제 대응 자동화. 복잡한 서플라이 체인의 협업 관리를 지원합니다.",
            link: "/automotive"
          },
          {
            sector: "Sector 02",
            title: "Medical SaMD",
            desc: "IEC 62304, ISO 13485 기반의 의료기기 소프트웨어 인증 가속화. 인허가 성공률을 획기적으로 높입니다.",
            link: "/medical"
          },
          {
            sector: "Sector 03",
            title: "General SW",
            desc: "ISO 27001, 9001 등 범용적인 품질/정보보안 인증 체계 구축. 스타트업부터 엔터프라이즈까지 유연한 확장이 가능합니다.",
            link: "/cmmi"
          }
        ].map((item, i) => (
          <Link 
            key={i}
            to={item.link}
            className="bg-surface-container-lowest p-10 transition-colors cursor-pointer group hover:bg-white/50"
          >
            <span className="text-xs font-black text-primary tracking-widest uppercase mb-4 block">{item.sector}</span>
            <h4 className="text-2xl font-bold text-primary mb-4">{item.title}</h4>
            <p className="text-on-surface-variant text-sm mb-8">{item.desc}</p>
            <div className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
              자세히 보기 <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="px-6 py-24 bg-primary text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90" />
    <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-tight">3일 안에 우리 회사의<br />현주소를 확인하세요.</h2>
        <p className="text-primary-fixed-dim text-lg mb-10">무료 갭 분석 리포트를 통해 인증 가능 여부와 예상 소요 기간을 즉시 진단해 드립니다.</p>
        <ul className="flex flex-col gap-4 mb-10 items-center lg:items-start">
          {[
            "준비 현황 1:1 맞춤 진단",
            "주요 미충족 요건(Gaps) 도출",
            "도메인 전문가 기술 상담 포함"
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-primary-fixed w-5 h-5" />
              <span className="font-medium">{text}</span>
            </li>
          ))}
        </ul>
        <button className="bg-white text-primary px-10 py-5 rounded-lg font-black text-xl shadow-2xl hover:bg-primary-fixed transition-colors active:scale-95 duration-200">
          무료 갭 분석 신청하기
        </button>
      </div>
      <div className="lg:w-1/3 w-full">
        <div className="glass-card p-8 rounded-2xl border border-white/10 shadow-inner text-primary">
          <div className="flex items-center justify-between mb-8">
            <span className="font-bold">Analysis Status</span>
            <div className="pulse-agent" />
          </div>
          <div className="space-y-6">
            <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "75%" }}
                className="h-full bg-primary" 
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-on-surface-variant">Scanning Documentation</span>
              <span className="font-bold">75%</span>
            </div>
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-xs font-mono leading-relaxed text-on-surface-variant">
                [AGENT] Potential non-conformity detected in ISO 26262 Part 6. Recommended action: Update traceability matrix.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <DomainSection />
      <CTASection />
    </>
  );
}
