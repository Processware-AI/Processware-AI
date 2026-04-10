import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const AcademyPage = () => {
  const courses = [
    {
      id: 'aspice-4-0',
      category: '자동차',
      categoryColor: 'bg-primary',
      title: 'ASPICE 4.0 완벽 마스터',
      desc: '현대 자동차 소프트웨어 개발을 위한 최신 자동차 프로세스 우수성 프레임워크를 심층 분석합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJUt3YwpXlxpWwpUa8uBuE468KbcBgWCyHqqvxwy58UuoAbsG6NFs0zWRLXNdbtAFRTDAAOhMefNTO3k_1xQGR6bST2ywdqhiinrO4AF44WGQYjWo7jPeyS6ryUgksWSQy15VC68DKH5VPRwJXaOPt5ZIselLXCvaQvBqGIkVBARHKeaYtYHocygndHCNVPJ2XBFzJ-K66QAd0WLkSFF7s93n6D8ClK0oD77tXKLZ5jX5lj03nzHdse9OphHzsWWZ-Gu6ptisIyw3H',
      duration: '12주',
      level: '상급',
      price: '$1,499'
    },
    {
      id: 'iec-62304',
      category: '의료 기기',
      categoryColor: 'bg-surface-tint',
      title: 'SaMD를 위한 IEC 62304 준수',
      desc: '의료 기기 소프트웨어(SaMD) 및 의료 시스템을 위한 소프트웨어 수명 주기 프로세스에 대한 포괄적인 가이드를 제공합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqjCod-zcm5_E8HEpMpqXQfJPXe8efXoxbPZ4XMsbsh3zVH1ZC1kSmU5y09hOsn-UYusrQwBdSSjEnqGfCjXbio1MxvK14621lVagKGLDMy8w_-DY4b_O8MPtp3qL79Ydkn3dUD10LScLS5tabk8xGBifpmxcnOgbra9VYJJiD46LBDg36Bn8S-e-iLYIcf4Nu3IXgdLrBZvkSLRX7tJH0DYHv2u_MCzMAw3iZByubgzFSFs2Iq6AnfMN40HtLLccGtpxue0t-_3Oh',
      duration: '8주',
      level: '중급',
      price: '$1,199'
    },
    {
      id: 'cmmi-v2-0',
      category: '운영',
      categoryColor: 'bg-secondary',
      title: 'CMMI v2.0 운영 우수성',
      desc: '제품 개발 및 조직 서비스 역량을 위해 성과 중심의 벤치마크를 구현하는 방법을 학습합니다.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPJf8_Hyx_LH72THWUJyaH8Fhhf1hQ2LYR7ewvFR5EZt28xdysJhWWLlCQhV5rPORu1VjsU4300bZQhbIV_EhoQQQFUkUmb6d3WfeO5HvZ7ef2pTuK5GAfzuv8nwU-301W4XCRCdGQALpFumukKrYyeHL_RIKqEP1G9b2TpFnavMjx6V_-Gv6SJjywmX1_kE90LgjQERZa9S6rlcfyKeC1P2sTaa34oY2xLmDyONTlrHQ0ugBPgNQ7_jyc-8CHR4R1iVx08FMCdXFm',
      duration: '15주',
      level: '전문가',
      price: '$1,850'
    }
  ];

  return (
    <div className="bg-surface text-on-surface font-sans antialiased min-h-screen">
      {/* Sidebar (Desktop) */}
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

      <main className="lg:ml-64 pt-24 pb-32 px-6 min-h-screen">
        {/* Hero Header */}
        <section className="max-w-7xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl"
          >
            <div className="relative z-10 flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                <span className="material-symbols-outlined text-xs">verified</span>
                <span className="text-xs font-bold uppercase tracking-widest">프리미엄 러닝</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight leading-none">규제 정밀도 아카데미</h2>
              <p className="text-lg text-primary-fixed opacity-90 max-w-xl font-light leading-relaxed">Aegis Digital Jurist가 설계한 업계 표준 인증 과정을 통해 복잡한 글로벌 컴플라이언스를 마스터하십시오.</p>
            </div>
            <div className="relative w-full md:w-1/3 aspect-[4/3] rounded-lg overflow-hidden shadow-2xl rotate-2">
              <img 
                alt="미래형 디지털 라이브러리" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RIvYWfytHkmx3_4qcDuhLnbn5qbRELqDC5O7X5AqL67sAy8TaX7EpCmGEeh2e6kOFwo8YFF0neLV0JsadrS0nWMZpEeogHTqgRwNTj_pFvW-g9SOHEgrcHPKB2dIS4LcDGOLkvbJgg_fkh8qBJDnIhWTmgzbojFQQVKW8W36Pqbr65JtluGfk711ssR1kspbRnFnYkZXYmfKXJEqIoQvAFNleFldzawVO3FY_ZgwlHduETCf_8DmWahlt837tloTuHapzqJQFAbt" 
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </section>

        {/* Search and Filter */}
        <section className="max-w-7xl mx-auto mb-10">
          <h1 className="text-2xl font-bold text-primary mb-6">아카데미: 교육 과정 목록</h1>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 group w-full">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
              <input 
                className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none shadow-sm rounded-lg text-on-surface focus:ring-2 focus:ring-primary/20 outline-none transition-all border-b-2 border-outline-variant/15" 
                placeholder="강의, 표준 또는 프레임워크 검색..." 
                type="text"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <select className="flex-1 md:flex-none appearance-none bg-surface-container-low px-6 py-4 rounded-lg font-semibold text-on-surface-variant border-none outline-none hover:bg-surface-container transition-colors cursor-pointer">
                <option>도메인: 전체</option>
                <option>자동차</option>
                <option>의료 기기</option>
                <option>프로세스 우수성</option>
              </select>
              <button className="p-4 bg-surface-container-low rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined">filter_list</span>
              </button>
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-surface-container-lowest rounded-xl p-1 transition-all duration-300 hover:shadow-[0px_12px_32px_rgba(0,30,64,0.06)] flex flex-col border border-outline-variant/10"
              >
                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                  <img 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={course.image} 
                    referrerPolicy="no-referrer"
                  />
                  <div className={cn("absolute top-4 left-4 px-3 py-1 text-white text-[10px] font-bold rounded uppercase tracking-tighter", course.categoryColor)}>
                    {course.category}
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2 leading-tight">{course.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-6 flex-1 leading-relaxed">{course.desc}</p>
                  <div className="grid grid-cols-3 gap-4 mb-6 border-b border-outline-variant/15 pb-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-wider">기간</span>
                      <span className="text-sm font-semibold text-on-surface">{course.duration}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-wider">레벨</span>
                      <span className="text-sm font-semibold text-on-surface">{course.level}</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[10px] text-on-surface-variant/60 font-bold uppercase tracking-wider">가격</span>
                      <span className="text-sm font-bold text-on-surface">{course.price}</span>
                    </div>
                  </div>
                  <Link 
                    to={course.id === 'aspice-4-0' ? '/academy/aspice-4-0' : '#'} 
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-primary-container text-white font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95"
                  >
                    수강 신청 <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-7xl mx-auto mt-20">
          <div className="bg-surface-container-low rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline-variant/10">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold text-primary mb-4">규제 변화에 대비하세요</h4>
              <p className="text-on-surface-variant leading-relaxed">Aegis Jurist가 새로운 규제 동향을 파악하거나 ISO, ASPICE, FDA 표준에 대한 강의 자료를 업데이트할 때 알림을 보내드립니다.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input 
                className="px-6 py-3 rounded-lg bg-white border-none shadow-sm focus:ring-2 focus:ring-primary/20 outline-none flex-1 md:w-64" 
                placeholder="jurist@firm.com" 
                type="email"
              />
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container transition-all shadow-md">구독하기</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AcademyPage;
