import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  ShieldCheck, 
  Edit3,
  Search,
  BarChart3,
  Quote
} from 'lucide-react';

const Hero = () => (
  <section className="relative min-h-[70vh] flex flex-col justify-center px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        className="w-full h-full object-cover opacity-20 grayscale" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl90NzFneLv-pjBzT-EULXoYhaxKMsEDub38MKdHFkVsJZOH7LHPVHmMxddXLOaqrJ7MNNKijvTx5RdGjYIUzk5i_zRqJ-qA9XCeB7cfpzEv4qElSWHYc392B8W73_t-9mHhMKSeXEvqzVL4RZ9fP008FCA-sdyMhRA_lSCCyGnEZmzBMppMFp_5k9rmzUmZgOk9YBJZUPoYr63fE5Kt5aYuS27U0NKtuGNnnSV6p33VO-q05Tnx0aJfShmiJZSG0EaJz3LCNWzQUu" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold mb-6">
        <div className="pulse-agent" />
        AUTOTOMOTIVE COMPLIANCE ENGINE
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-primary leading-[1.1] tracking-tight mb-6">
        ASPICE 심사 D-90,<br />
        <span className="text-primary-container">아직 산출물 절반도 못 쓰셨다면.</span>
      </h1>
      <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-md">
        OEM 사의 까다로운 컴플라이언스 요구사항, 이제 수동 작업이 아닌 AI 규제 전문가에게 맡기십시오.
      </p>
      <div className="flex flex-col gap-4">
        <button className="bg-primary text-white py-4 px-8 rounded-lg font-bold text-lg shadow-lg active:scale-95 transition-all w-fit">
          무료 갭 분석 신청하기
        </button>
        <div className="flex justify-center md:justify-start gap-4 text-xs font-medium text-on-surface-variant/60">
          <span>ASPICE v3.1/4.0</span>
          <span>ISO 26262</span>
          <span>ISO 21434</span>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-24 px-6 bg-surface-container-low">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-black text-primary mb-12 tracking-tight">The Compliance Crisis</h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 glass-card p-8 rounded-xl shadow-sm">
          <div className="flex flex-col h-full justify-between">
            <div>
              <FileText className="text-primary mb-4 w-10 h-10" />
              <h3 className="text-xl font-bold mb-4">Documentation Overload</h3>
              <p className="text-on-surface-variant leading-relaxed">평균 프로젝트당 200개 이상의 산출물. 엔지니어링 리소스의 40% 이상이 코딩이 아닌 문서 작성에 매몰되고 있습니다.</p>
            </div>
            <div className="mt-8">
              <span className="text-4xl font-black text-primary">40%</span>
              <span className="text-sm font-semibold text-outline-variant block">RESOURCE DRAIN</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 bg-primary p-8 rounded-xl text-white">
          <BarChart3 className="text-primary-fixed-dim mb-4 w-10 h-10" />
          <h3 className="text-xl font-bold mb-4">Standards Fragmentation</h3>
          <p className="opacity-80 leading-relaxed mb-8">ISO 26262, 21434, ASPICE... 유사한 내용을 규정마다 중복 작성하는 비효율이 발생합니다.</p>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs">Redundant Tasks</span>
              <span className="text-xs font-bold text-primary-fixed">65% High Risk</span>
            </div>
            <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-primary-fixed-dim h-full w-[65%]"></div>
            </div>
          </div>
        </div>
        <div className="md:col-span-12 bg-white p-8 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="text-xl font-bold mb-4">Human Dependency & Silos</h3>
              <p className="text-on-surface-variant leading-relaxed">특정 시니어 엔지니어의 경험에만 의존하는 프로세스는 심사 시 대응 취약점으로 직결됩니다.</p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-surface-container p-4 rounded-lg text-center">
                <div className="text-2xl font-black text-primary">ZERO</div>
                <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Consistency</div>
              </div>
              <div className="bg-surface-container p-4 rounded-lg text-center">
                <div className="text-2xl font-black text-primary">HIGH</div>
                <div className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-widest">Single Point Failure</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SolutionSection = () => (
  <section className="py-24 px-6 bg-surface">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <span className="text-primary font-black tracking-widest text-xs uppercase">The Solution</span>
        <h2 className="text-3xl md:text-4xl font-black text-primary mt-4 tracking-tight">Three Pillars of Precision</h2>
      </div>
      <div className="space-y-24">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Search className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-bold">Gap Analysis Agent</h3>
            </div>
            <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
              현행 산출물과 ASPICE 4.0 기준 간의 간극을 실시간으로 분석합니다. 단순 누락 확인을 넘어, OEM 특화 요구사항(RQ) 반영 여부까지 정밀 진단합니다.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                <CheckCircle className="w-4 h-4 fill-primary text-white" />
                Requirement Traceability Coverage
              </li>
              <li className="flex items-center gap-3 text-sm font-semibold text-primary">
                <CheckCircle className="w-4 h-4 fill-primary text-white" />
                OEM-specific Checklist Validation
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-[300px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzatCIEYAN2R_V_PDZp2eH6kJb0_bm2r5PtSRZEspXQM2gD61vvd15uv5-0Cyx4PhGnrTAgCHv2KNf_O_fkPHJmX78_5CG2LIF4OmH7L6bSazJIjUFx4fsBQG-PUX0RQ8pK6F1k0tlHjBno0z0wmD6FJegHIA1TKfcPDKzCrG7_BNLAzrtIVwnBwlhfRGqftR1FN7SAvtgw15p-a6GmQs8Ih75dyVhIQWOPNlX8Z8XxrNPPMu5ZV5dY_NZ4sE1lcViV6ob2bhctB8I" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              className="w-full h-[300px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwn_3RZRSeG2ZHOJwe4FvfEQBQ4pOb8z-Y8Jur-P3cm22UFGm-CZc4MiVkpsQncM_VL5tUQdMTYMkAKstY_M6lCgNSvCf6NJZIwrxFnWufx-TBc9bPkcfpSnqWN2kemWXST4eMu1joc2cGYaM33TWVsFxwOeJw79BKoFTudFc--KLfCad3RjgX33Ur_JF4oN7rR6VPgXOqGcHt4KioKKWa_QywyUBH0Oh46NOVdEyxjNv0qT-9yiKTMHZddW6Qqv4Wz2mruA5fe_fk" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <Edit3 className="text-primary w-6 h-6" />
              <h3 className="text-2xl font-bold">Document Generation</h3>
            </div>
            <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">
              설계 데이터를 기반으로 Automotive-grade 문서를 자동 생성합니다. 수작업 시 발생하는 용어 불일치와 서식 오류를 0%로 수렴시킵니다.
            </p>
            <div className="bg-surface-container-low p-4 rounded-lg border-l-4 border-primary">
              <p className="text-sm font-bold text-primary">"ISO 26262 안전 분석 보고서 90% 자동화 성공"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function AutomotivePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <ProblemSection />
      <SolutionSection />
    </div>
  );
}
