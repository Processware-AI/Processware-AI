import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const DashboardPage = () => {
  return (
    <div className="bg-surface font-sans text-on-surface antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 flex flex-col bg-surface-container-low shadow-[0px_12px_32px_rgba(0,30,64,0.06)] hidden lg:flex pt-24 border-r border-outline-variant/10">
        <nav className="flex-1 px-4 space-y-2">
          <a className="flex items-center gap-4 px-4 py-3 bg-white text-primary font-semibold rounded-lg transition-all ease-in-out duration-200" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">대시보드</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200" href="/academy">
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">아카데미</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200" href="/marketplace">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">서비스</span>
          </a>
          <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200" href="/about">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-medium">재단 정보</span>
          </a>
        </nav>
        <div className="p-6 mt-auto">
          <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm">
            <p className="text-[11px] text-on-surface-variant font-bold mb-2 uppercase tracking-wider">네트워크 상태</p>
            <div className="flex items-center gap-2">
              <div className="pulse-agent" />
              <span className="text-xs font-medium">프로토콜 안정적</span>
            </div>
          </div>
          <p className="mt-4 text-[10px] text-on-surface-variant/50 font-medium tracking-wide">v2.4.0 • 시스템 활성</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 px-4 md:px-8 py-8 pb-24 md:pb-8">
        <header className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold text-on-surface tracking-tight mb-2"
          >
            프로젝트 허브 대시보드
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg max-w-2xl leading-relaxed"
          >
            Aegis Protocol 티어 1 자산의 통합 규제 모니터링 및 프로젝트 생애주기 관리 서비스입니다.
          </motion.p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Timeline Section */}
          <section className="md:col-span-8 bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_16px_rgba(0,30,64,0.04)]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-primary tracking-tight">프로젝트 Aegis - 티어 1 감사</h2>
                <p className="text-sm text-on-surface-variant">실시간 생애주기 모니터링</p>
              </div>
              <span className="text-xs font-bold text-on-primary-fixed-variant bg-primary-fixed px-3 py-1 rounded-full uppercase tracking-wider">우선순위: 높음</span>
            </div>
            
            <div className="space-y-6 overflow-x-auto pb-4">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-6 border-b border-outline-variant/15 pb-2 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                  <div>01단계</div>
                  <div>02단계</div>
                  <div>03단계</div>
                  <div>04단계</div>
                  <div>05단계</div>
                  <div>06단계</div>
                </div>
                <div className="mt-6 space-y-8">
                  <div className="relative h-4 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "45%" }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-container rounded-full shadow-[0px_4px_12px_rgba(0,30,64,0.15)]" 
                    />
                    <div className="absolute left-[5%] top-1/2 -translate-y-1/2 text-[9px] font-bold text-white px-2 uppercase">초기 접수</div>
                  </div>
                  <div className="relative h-4 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "35%" }}
                      transition={{ delay: 0.2 }}
                      className="absolute left-[30%] top-0 h-full bg-primary-fixed-dim rounded-full" 
                    />
                    <div className="absolute left-[35%] top-1/2 -translate-y-1/2 text-[9px] font-bold text-on-primary-fixed px-2 uppercase">자산 검증</div>
                  </div>
                  <div className="relative h-4 w-full bg-surface-container-low rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "20%" }}
                      transition={{ delay: 0.4 }}
                      className="absolute left-[55%] top-0 h-full bg-outline-variant/30 rounded-full" 
                    />
                    <div className="absolute left-[58%] top-1/2 -translate-y-1/2 text-[9px] font-bold text-on-surface-variant px-2 uppercase">리스크 분석</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Calendar Widget */}
          <section className="md:col-span-4 bg-surface-container-lowest rounded-xl p-6 shadow-[0px_4px_16px_rgba(0,30,64,0.04)]">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary">마감 기한 일정</h3>
              <button className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['일','월','화','수','목','금','토'].map(day => (
                <span key={day} className="text-[10px] font-bold text-on-surface-variant text-center">{day}</span>
              ))}
              {[28,29,30,1,2,3,4,5,6,7,8,9,10,11].map((day, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-8 flex items-center justify-center text-xs rounded-lg",
                    day === 5 ? "bg-primary text-white font-bold" : "font-semibold",
                    i < 3 ? "text-on-surface-variant/40" : "text-on-surface",
                    day === 3 || day === 7 ? "relative" : ""
                  )}
                >
                  {day}
                  {(day === 3 || day === 7) && (
                    <div className={cn("absolute bottom-1 w-1 h-1 rounded-full", day === 3 ? "bg-error" : "bg-primary-fixed-dim")} />
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-3 mt-6 border-t border-outline-variant/15 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-error rounded-full" />
                <div>
                  <p className="text-xs font-bold text-on-surface">FATF-12 신고 마감</p>
                  <p className="text-[10px] text-on-surface-variant">2일 전</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1 h-8 bg-primary-fixed-dim rounded-full" />
                <div>
                  <p className="text-xs font-bold text-on-surface">스마트 계약 검토</p>
                  <p className="text-[10px] text-on-surface-variant">진행 중</p>
                </div>
              </div>
            </div>
          </section>

          {/* Active Projects */}
          <section className="md:col-span-12 lg:col-span-9 space-y-4">
            <div className="flex items-end justify-between mb-2">
              <h2 className="text-xl font-bold text-primary tracking-tight">활성 규제 포트폴리오</h2>
              <a className="text-sm font-semibold text-primary border-b border-primary/30 hover:border-primary transition-all" href="#">글로벌 원장 보기</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { id: 'P-882', icon: 'account_balance', title: '글로벌 스테이블코인 감사', desc: '고유동성 법정화폐 담보 자산에 대한 분기별 준수 여부 검증입니다.', progress: 78, color: 'bg-primary' },
                { id: 'P-912', icon: 'shield_with_heart', title: 'KYC/AML V3 통합', desc: 'EU 지침 14.b 표준을 충족하기 위한 핵심 식별 프로토콜 업데이트입니다.', progress: 34, color: 'bg-primary-fixed-dim' },
                { id: 'P-044', icon: 'data_exploration', title: 'L2 유동성 모니터링', desc: 'Optimistic 롤업 전반의 비정상 거래 패턴에 대한 자동 온체인 감시입니다.', progress: 92, color: 'bg-gradient-to-r from-primary to-primary-container' }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-surface-container-lowest p-5 rounded-xl shadow-[0px_4px_16px_rgba(0,30,64,0.04)] group hover:bg-white transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="material-symbols-outlined text-primary-container">{project.icon}</span>
                    <span className="text-[10px] font-extrabold text-on-surface-variant/60 uppercase tracking-widest">{project.id}</span>
                  </div>
                  <h4 className="font-bold text-on-surface mb-1">{project.title}</h4>
                  <p className="text-xs text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">{project.desc}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-bold">
                      <span>진행률</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        className={cn("h-full rounded-full", project.color)} 
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Insight Panel */}
          <section className="md:col-span-12 lg:col-span-3">
            <div className="bg-primary text-white rounded-xl p-6 relative overflow-hidden h-full min-h-[300px] shadow-xl">
              <div className="absolute -right-10 -bottom-10 opacity-10 scale-150 rotate-12 pointer-events-none">
                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-bold mb-4">컴플라이언스 건강 지수</h3>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-black tracking-tighter">9.8</span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">등급</span>
                    <span className="text-xs text-primary-fixed-dim font-semibold">모범적</span>
                  </div>
                </div>
                <div className="mt-auto space-y-4">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="opacity-80">네트워크 지연</span>
                    <span>14ms</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="opacity-80">프로토콜 편차</span>
                    <span>0.002%</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 mt-4 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="pulse-agent" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">법무 의견</span>
                    </div>
                    <p className="text-[11px] leading-relaxed opacity-90">모든 티어 1 자산은 현재 표준 Aegis Protocol 규정을 100% 준수하고 있습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Visual Feature - AI Insight */}
          <section className="md:col-span-12 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="md:col-span-1 overflow-hidden rounded-xl shadow-lg h-64 md:h-auto border border-outline-variant/10">
                <img 
                  alt="Cybersecurity Visualization" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAweomn5peIZ3ivMZs7pRCQfX4hcsB-RMVwQHC8UewGUxZkyMAwB0mh9sONXqa_a_aesvJeryHlgM0hZFBDn7fGCFNGsS8R_bGOtT0zNfx6w73q7Uy0ivh8TBgWfPgRiJdGTuv10oWg2xVXi93bp5YwBI7i72MKBRXF7h_9_CIAtHreg0X_BZo5trHOsW0C0BfmcCfFsrRLrwta43bb-kZJiaawbhtRWMv-_XbLdt7Hu5fwa2WtYxb0_uMgH4I7MV4BaCWINfuet-vz" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:col-span-2 bg-surface-container-low p-8 rounded-xl flex flex-col justify-center border border-outline-variant/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="pulse-agent" />
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">법무 지능 보고서</h3>
                </div>
                <h2 className="text-2xl font-bold text-on-surface mb-4">심층 스캐닝 04단계 즉시 실행</h2>
                <p className="text-lg text-on-surface-variant mb-6 leading-relaxed">디지털 법무 시스템이 APAC 지역의 잠재적인 규제 변화를 감지했습니다. 최적의 컴플라이언스 태세를 유지하기 위해 프로젝트 Aegis 티어 1 파라미터가 24시간 이내에 자동으로 조정됩니다.</p>
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95">모든 포트폴리오 업데이트</button>
                  <button className="bg-white text-on-surface-variant px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:bg-surface-container-high active:scale-95 border border-outline-variant/15">알림 닫기</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* FAB */}
      <button className="fixed bottom-24 md:bottom-8 right-6 md:right-8 w-14 h-14 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 active:scale-95 z-50">
        <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
        <span className="absolute right-full mr-4 bg-primary text-white text-xs font-bold py-2 px-4 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">새 프로젝트 생성</span>
      </button>
    </div>
  );
};

export default DashboardPage;
