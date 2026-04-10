import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link, useNavigate } from 'react-router-dom';

const AspiceCoursePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) - Reusing consistent nav */}
      <aside className="fixed left-0 top-0 h-full w-64 z-40 flex flex-col bg-surface-container-low shadow-[0px_12px_32px_rgba(0,30,64,0.06)] hidden lg:flex pt-24 px-4 border-r border-outline-variant/10">
        <nav className="space-y-2">
          <Link to="/dashboard" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">대시보드</span>
          </Link>
          <Link to="/academy" className="w-full flex items-center gap-4 px-4 py-3 bg-white text-primary font-semibold rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">school</span>
            <span className="text-sm font-medium">아카데미</span>
          </Link>
          <Link to="/marketplace" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">handshake</span>
            <span className="text-sm font-medium">서비스</span>
          </Link>
          <Link to="/about" className="w-full flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-all ease-in-out duration-200">
            <span className="material-symbols-outlined">info</span>
            <span className="text-sm font-medium">재단 정보</span>
          </Link>
        </nav>
      </aside>

      <main className="lg:ml-64 max-w-7xl mx-auto px-6 py-12 md:py-20">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-primary-container text-on-primary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              현재 모집 중: Q4 코호트
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-primary tracking-tighter leading-[0.9] mb-8"
            >
              강의: ASPICE 4.0 <br/> 완벽 마스터
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl"
            >
              최신 Automotive SPICE 프레임워크의 복잡성을 정확하게 탐색하십시오. 이 심화 인증 과정은 디지털 전문가가 차세대 소프트웨어 정의 차량(SDV) 규정 준수를 준비할 수 있도록 설계되었습니다.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/payment" className="bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 shadow-lg hover:scale-95 transition-transform duration-150">
                수강 신청 및 결제 
                <span className="material-symbols-outlined">payments</span>
              </Link>
              <button className="bg-surface-container-highest text-on-surface-variant px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-colors">
                커리큘럼 다운로드
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative group shadow-2xl">
              <img 
                alt="ASPICE 4.0의 추상적 디지털 표현" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80 transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAONJDjVHd8bKW7KbNSPYsHaUwta6JK9PCTmJdQZFxwt3dzTtbt5IpPQJBul0DYGD7-7BOcQuUnC5k-qoorOIrt7PCNiebKZzHNHcYJTRcrmRAl7_IhYZhBQnpLbAVZeyCE8X5in1-ARyQ69QqhopLYrckdvBVOtE9Kam3-SsVwaDorsoCDDPH4IP54cIQ-iSrjaIKjeMXsU96HQNi01GzFyHtXNFw5S3Is9tqwyPBQPNyrHGYW48Ikvc5qF1ZLcSGsDVQxM3PRCLzE" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-xl p-6 rounded-lg border border-white/20 shadow-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">강의 진행률</span>
                  <span className="text-xs font-bold text-primary">0%</span>
                </div>
                <div className="w-full bg-outline-variant/20 h-1.5 rounded-full">
                  <div className="bg-primary w-0 h-full rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-xl p-4 rounded-lg shadow-xl border border-white/20 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed-dim flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-primary">smart_toy</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-tighter">강사</p>
                  <p className="text-sm font-bold text-primary">Aegis AI 에이전트</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 space-y-8">
            <div className="bg-surface-container-low p-8 md:p-12 rounded-xl border border-outline-variant/10">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold text-primary tracking-tight">커리큘럼 개요</h3>
                <span className="text-sm text-on-surface-variant font-medium">12개 모듈 • 48시간</span>
              </div>
              <div className="space-y-6">
                {[
                  { id: '01', title: '프레임워크 진화: 3.1에서 4.0으로', desc: '아키텍처의 변화, 새로운 프로세스 그룹, 그리고 사이버 보안 요구 사항의 통합에 대해 이해합니다.' },
                  { id: '02', title: '프로세스 성능 지표 (PPIs)', desc: '높은 수준의 컴플라이언스 성숙도에 필요한 정량적 측정 방법을 마스터합니다.' },
                  { id: '03', title: '애자일 및 하이브리드 라이프 사이클', desc: '현대적인 DevOps 및 애자일 방법론을 ASPICE 4.0 규제 가드레일에 매핑합니다.' },
                  { id: '04', title: '심사 시뮬레이션', desc: 'Aegis AI 에이전트가 주도하는 실습 워크숍을 통해 공식 VDA 심사를 시뮬레이션합니다.' }
                ].map((module) => (
                  <div key={module.id} className="flex items-start gap-6 group">
                    <div className="text-primary font-black text-2xl tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity duration-300">{module.id}</div>
                    <div className="flex-1 pb-6 border-b border-outline-variant/10">
                      <h4 className="text-lg font-bold text-primary mb-2">{module.title}</h4>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{module.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-8">
            <div className="bg-primary text-white p-8 rounded-xl relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mb-6 border border-white/20">
                  <span className="material-symbols-outlined text-primary-fixed text-3xl">psychology</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Aegis AI 에이전트</h3>
                <p className="text-primary-fixed text-xs font-bold uppercase tracking-widest mb-6">수석 강사</p>
                <p className="text-primary-fixed-dim text-sm leading-relaxed mb-6">
                  50,000페이지 이상의 국제 규제 문서 및 VDA 표준으로 학습되었습니다. 실시간 피드백, 채점 및 복잡한 질의 해결을 24/7 제공합니다.
                </p>
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  응답 속도: 45ms (활성)
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 shadow-sm">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">강의 세부 정보</h4>
              <ul className="space-y-4">
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">난이도</span>
                  <span className="font-bold text-primary">고급</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">인증</span>
                  <span className="font-bold text-primary">VDA 준수</span>
                </li>
                <li className="flex justify-between items-center text-sm">
                  <span className="text-on-surface-variant">다음 코호트</span>
                  <span className="font-bold text-primary">2024년 11월 15일</span>
                </li>
              </ul>
              <hr className="my-6 border-outline-variant/20"/>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-2xl font-black text-primary">$1,499.00</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold">일시불 결제</div>
              </div>
              <Link to="/payment" className="block w-full bg-primary text-white py-4 rounded-lg font-bold shadow-lg hover:scale-[0.98] transition-all active:scale-95 text-center">
                수강 신청하기
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AspiceCoursePage;
