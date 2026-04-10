import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  Cpu, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
      <img 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZucz1FsUzkq8ilqgunnfe1gLdZCDF8FN-wryz7csgonk6AWdNP53c4iGeQrd7ri_yu4KYub6E8n1g9X70ktNMyJ1Ap00xGQ429Vq-5cGJmd5HDoU5d07tXGoYU_NREq2zZfLCHI7DHC9B3KrJmZ7fKnnWOXuu31qKp_OsVX0TY8yIltVIzQxhuiagMkS2__2hQb8hEh73cwZ39_bv9hEJoNFiB4NDqv-wWk_Om_OR5GZyGFqB3E88YQzAnoMftYMjqYMXAnFHDNUc" 
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed rounded-full text-on-primary-fixed-variant text-xs font-bold uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-primary-fixed-dim pulse-dot"></span>
        Regulatory AI Agent Live
      </div>
      <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight tracking-tighter">
        식약처 보완 요청 0건으로<br />통과하는 법.
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-medium">
        IEC 62304 + 사이버보안, AI가 함께 준비합니다. 사후 관리부터 2025 가이드라인 준수까지 한 번에.
      </p>
      <div className="flex flex-col gap-4 pt-4">
        <button className="w-full bg-primary text-white py-5 rounded-lg font-bold text-lg shadow-lg active:scale-[0.98] transition-all max-w-md">
          의료기기 도메인 무료 갭 분석 신청하기
        </button>
        <div className="flex items-center justify-center md:justify-start gap-6 text-sm font-semibold text-on-surface-variant/60">
          <span>IEC 62304</span>
          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
          <span>IEC 81001-5-1</span>
          <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
          <span>SBOM</span>
        </div>
      </div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-20 px-6 bg-surface-container-low">
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-primary tracking-tight">지연되는 인허가, 원인은 세 가지입니다.</h2>
        <div className="h-1 w-12 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 space-y-4">
          <FileText className="text-primary w-8 h-8" />
          <h3 className="text-xl font-bold text-primary">문서 작업의 과부하</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">평균 1,200페이지에 달하는 기술 문서 작성. 수동 작업 시 휴먼 에러 발생률 42% 증가.</p>
        </div>
        <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 space-y-4 md:row-span-2 flex flex-col justify-between">
          <div className="space-y-4">
            <ShieldCheck className="text-primary w-8 h-8" />
            <h3 className="text-xl font-bold text-primary">2025 사이버보안 가이드라인</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">IEC 81001-5-1 및 SBOM 의무화 대응 미비 시 보완 요청 대상 1순위. 기존 프로세스로는 대응 불가.</p>
          </div>
          <div className="mt-8 p-4 bg-error/10 rounded-lg">
            <p className="text-error text-xs font-bold flex items-center gap-2">
              <AlertTriangle className="w-3 h-3" />
              CRITICAL RISK: 규제 미준수 시 시장 진입 평균 18개월 지연
            </p>
          </div>
        </div>
        <div className="p-8 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 space-y-4">
          <Cpu className="text-primary w-8 h-8" />
          <h3 className="text-xl font-bold text-primary">불명확한 AI/ML 기준</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">의료기기용 AI 알고리즘의 유효성 검증 및 변경 허가 기준의 모호성으로 인한 지속적 보완 발생.</p>
        </div>
      </div>
    </div>
  </section>
);

export default function MedicalPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <ProblemSection />
    </div>
  );
}
