import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Zap, 
  LayoutDashboard, 
  CheckCircle2,
  Lock
} from 'lucide-react';

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 right-0 w-full h-full -z-10 opacity-5">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7CuuB41LAmEe_xt0_5iAvLn78CW_6A4iEtHLgqrtamJTBwwWIot7LzdSk0x0qetTDftDNLMshSMKbjLw-UbE8YApdRTWEHc75tRkv0HnTpVAR1T5gy0MkRVb0z8NHhWboEI-NzNPkuLBZohFes9dxlD8yfqIVTzISGeW5Ye1Dc4yOkOXS_3BR5jcQhZk7hBL5AbHjn7ZX76uDXW3Q3Vgt66DDfN6cdFjoUGXl96KR0DZ6tpOmD2W1iTgOQGK9e4YUgOWUiiI7cj2R" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed-variant text-xs font-bold uppercase tracking-widest">
        GENERAL SW COMPLIANCE
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter">
        ISO 27001 & CMMI,<br />
        <span className="text-primary-container">가장 스마트하게 통과하는 길.</span>
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
        스타트업부터 엔터프라이즈까지, 복잡한 품질/보안 인증 체계를 AI가 자동화합니다. 
        실질적인 프로세스 개선과 인증 획득을 동시에 달성하세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button className="bg-primary text-white py-5 px-10 rounded-lg font-bold text-lg shadow-lg active:scale-[0.98] transition-all">
          무료 갭 분석 신청하기
        </button>
      </div>
    </div>
  </section>
);

const FeatureGrid = () => (
  <section className="py-20 px-6 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Lock className="w-8 h-8 text-primary" />,
            title: "ISO 27001 정보보안",
            desc: "ISMS-P 연계 및 글로벌 보안 표준 대응. AI가 보안 취약점 분석과 정책 문서 작성을 지원합니다."
          },
          {
            icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
            title: "CMMI Level 2/3/5",
            desc: "프로세스 성숙도 진단 및 내재화. 실질적인 프로젝트 관리 역량 강화와 인증 획득을 보장합니다."
          },
          {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "ISO 9001 품질경영",
            desc: "소프트웨어 품질 관리 체계 고도화. 고객 만족도 향상과 글로벌 시장 진출을 위한 필수 기반을 구축합니다."
          }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
            <div className="bg-primary/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function CMMIPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <FeatureGrid />
    </div>
  );
}
