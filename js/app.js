/**
 * VeloShip - Modern Logistics Web Experience
 * Slogan: Fast, Safe, and Always on Time
 * Strictly NO Emojis - Vector SVG Icons Only
 * Smooth, Graceful, Slow & Polished Transitions
 */

// Application State
const VeloState = {
  activeTab: 'home',
  currentUser: null, // null when logged out, or { name, email, plan }
  mockShipments: [
    {
      code: 'VELO-8829104-ID',
      service: 'Velo Express',
      sender: 'PT Sinergi Niaga (Jakarta)',
      receiver: 'Budi Santoso (Surabaya)',
      status: 'in-transit',
      statusText: 'Dalam Perjalanan Menuju Hub Surabaya',
      date: '24 Nov 2026, 09:45 WIB',
      origin: 'Jakarta (JKT-HUB-01)',
      destination: 'Surabaya (SUB-HUB-02)',
      weight: '3.5 Kg',
      eta: 'Besok (Garansi 24 Jam)',
      history: [
        {
          title: 'Paket telah tiba di Sorting Center Surabaya',
          location: 'Hub Transit Surabaya Selatan',
          time: '24 Nov 2026, 09:30 WIB',
          status: 'current'
        },
        {
          title: 'Paket dalam penerbangan kargo ekspres menuju Surabaya',
          location: 'Bandara Internasional Soekarno-Hatta',
          time: '24 Nov 2026, 04:15 WIB',
          status: 'completed'
        },
        {
          title: 'Diproses di Pusat Distribusi Utama Jakarta',
          location: 'Warehouse Hub Jakarta Barat',
          time: '23 Nov 2026, 21:00 WIB',
          status: 'completed'
        },
        {
          title: 'Paket berhasil dijemput oleh Kurir VeloShip',
          location: 'Pick-up Point Menteng, Jakarta Pusat',
          time: '23 Nov 2026, 16:20 WIB',
          status: 'completed'
        }
      ]
    },
    {
      code: 'VELO-5591023-EX',
      service: 'Velo Cargo',
      sender: 'CV Maju Logistik (Bandung)',
      receiver: 'Dr. Hendra (Medan)',
      status: 'delivered',
      statusText: 'Paket Telah Diterima oleh Penerima',
      date: '23 Nov 2026, 14:10 WIB',
      origin: 'Bandung (BDO-HUB)',
      destination: 'Medan (KNO-HUB)',
      weight: '18.2 Kg',
      eta: 'Selesai Tepat Waktu',
      history: [
        {
          title: 'Paket telah diserahkan dan diterima oleh Ybs',
          location: 'Medan Baru, Sumatera Utara',
          time: '23 Nov 2026, 14:10 WIB',
          status: 'current'
        },
        {
          title: 'Kurir armada cargo sedang mengantar ke alamat tujuan',
          location: 'Drop Point Medan Polonia',
          time: '23 Nov 2026, 09:15 WIB',
          status: 'completed'
        },
        {
          title: 'Paket tiba di Gateway Cargo Medan',
          location: 'Warehouse Gateway Medan',
          time: '22 Nov 2026, 18:30 WIB',
          status: 'completed'
        }
      ]
    },
    {
      code: 'VELO-1102934-ID',
      service: 'Velo Business',
      sender: 'PT Global Tech (Semarang)',
      receiver: 'Arya Wardhana (Denpasar)',
      status: 'out-for-delivery',
      statusText: 'Kurir Prioritas Sedang Bergerak Menuju Lokasi Penerima',
      date: '24 Nov 2026, 10:15 WIB',
      origin: 'Semarang (SRG-HUB)',
      destination: 'Denpasar (DPS-HUB)',
      weight: '1.2 Kg',
      eta: 'Hari ini sebelum 17:00 WIB (SLA Guaranteed)',
      history: [
        {
          title: 'Kurir prioritas bisnis sedang dalam perjalanan menuju alamat tujuan',
          location: 'Sanur, Denpasar Selatan',
          time: '24 Nov 2026, 10:15 WIB',
          status: 'current'
        },
        {
          title: 'Paket lolos sortir prioritas dan ditugaskan ke kurir B2B',
          location: 'Velo Hub Denpasar Timur',
          time: '24 Nov 2026, 08:30 WIB',
          status: 'completed'
        },
        {
          title: 'Pengiriman corporate terjadwal',
          location: 'Semarang Dispatch Center',
          time: '23 Nov 2026, 23:45 WIB',
          status: 'completed'
        }
      ]
    }
  ]
};

// SVG Icon Helper function
function getSvgIcon(name, extraClass = '') {
  const icons = {
    check: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    arrowRight: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    search: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    clock: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    shield: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    zap: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    box: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    truck: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    user: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    lock: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>',
    mail: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    eye: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    eyeOff: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>',
    mapPin: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    chevronDown: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>',
    logOut: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>',
    calculator: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>',
    phone: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    globe: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    whatsapp: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>',
    tag: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>',
    copy: '<svg class="icon ' + extraClass + '" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>'
  };
  return icons[name] || '';
}

// Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initHeroWidget();
  initTracking();
  initCalculator();
  initAuthSystem();
  initFaqAccordion();
  initContactForm();
  checkPersistedSession();
});

/**
 * Navigation and Smooth Tab Transitions
 * Implements graceful, slow, high-end animation between tabs
 */
function initNavigation() {
  const tabButtons = document.querySelectorAll('.nav-tab-btn, .footer-nav-link[data-target-tab]');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navWrapper = document.getElementById('navWrapper');

  if (mobileToggle && navWrapper) {
    mobileToggle.addEventListener('click', () => {
      navWrapper.classList.toggle('mobile-open');
    });
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-target-tab');
      if (targetTab) {
        switchTab(targetTab);
        if (navWrapper && navWrapper.classList.contains('mobile-open')) {
          navWrapper.classList.remove('mobile-open');
        }
      }
    });
  });

  // Handle direct links or logo click
  const brandLogo = document.getElementById('brandLogoLink');
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('home');
    });
  }
}

/**
 * Switch Tab with Slow & Graceful Transition
 */
function switchTab(tabId) {
  if (VeloState.activeTab === tabId && document.getElementById(`tab-${tabId}`)?.classList.contains('active')) {
    return;
  }

  const currentTabEl = document.querySelector('.tab-view.active');
  const nextTabEl = document.getElementById(`tab-${tabId}`);

  if (!nextTabEl) return;

  // Update active state in nav buttons
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    if (btn.getAttribute('data-target-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Perform smooth transition
  if (currentTabEl) {
    currentTabEl.style.opacity = '0';
    currentTabEl.style.transform = 'translateY(-10px) scale(0.995)';
    currentTabEl.style.transition = 'opacity 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)';

    setTimeout(() => {
      currentTabEl.classList.remove('active');
      currentTabEl.style.display = 'none';

      // Activate new tab
      nextTabEl.style.display = 'block';
      // Trigger reflow
      void nextTabEl.offsetWidth;

      nextTabEl.classList.add('active');
      nextTabEl.style.opacity = '';
      nextTabEl.style.transform = '';

      VeloState.activeTab = tabId;

      // Scroll smoothly to top of main section
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 320);
  } else {
    nextTabEl.classList.add('active');
    nextTabEl.style.display = 'block';
    VeloState.activeTab = tabId;
  }
}

/**
 * Hero Interactive Quick-Widget (Resi / Tarif Switcher)
 */
function initHeroWidget() {
  const widgetTabs = document.querySelectorAll('.widget-tab-btn');
  widgetTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-widget');
      widgetTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.widget-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const activePanel = document.getElementById(`widget-panel-${target}`);
      if (activePanel) {
        activePanel.classList.add('active');
      }
    });
  });

  // Hero Quick Track Form
  const heroTrackForm = document.getElementById('heroTrackForm');
  if (heroTrackForm) {
    heroTrackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('heroTrackingInput');
      const resiCode = input.value.trim();
      if (resiCode) {
        switchTab('tracking');
        setTimeout(() => {
          executeTrackingSearch(resiCode);
        }, 400);
      } else {
        showToast('Masukkan nomor resi pengiriman Anda.', 'warning');
      }
    });
  }

  // Quick chips click
  document.querySelectorAll('.sample-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const code = chip.getAttribute('data-code');
      const heroInput = document.getElementById('heroTrackingInput');
      const mainInput = document.getElementById('mainTrackingInput');
      if (heroInput) heroInput.value = code;
      if (mainInput) mainInput.value = code;

      switchTab('tracking');
      setTimeout(() => {
        executeTrackingSearch(code);
      }, 400);
    });
  });

  // Hero Quick Rate Form
  const heroRateForm = document.getElementById('heroRateForm');
  if (heroRateForm) {
    heroRateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      switchTab('rates');
    });
  }
}

/**
 * Shipment Tracking Logic
 */
function initTracking() {
  const trackingForm = document.getElementById('mainTrackingForm');
  if (trackingForm) {
    trackingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('mainTrackingInput');
      const code = input.value.trim();
      if (code) {
        executeTrackingSearch(code);
      } else {
        showToast('Mohon isi nomor resi yang ingin dilacak.', 'warning');
      }
    });
  }
}

function executeTrackingSearch(code) {
  const resultContainer = document.getElementById('trackingResultCard');
  const searchBtn = document.getElementById('mainTrackingBtn');
  const input = document.getElementById('mainTrackingInput');

  if (input) input.value = code;

  // Button loading state
  if (searchBtn) {
    searchBtn.disabled = true;
    searchBtn.innerHTML = '<span class="spinner-small"></span> Mencari data...';
  }

  // Graceful simulated search latency
  setTimeout(() => {
    if (searchBtn) {
      searchBtn.disabled = false;
      searchBtn.innerHTML = getSvgIcon('search') + ' Lacak Sekarang';
    }

    // Match code from mock shipments or generate smart data
    let shipment = VeloState.mockShipments.find(s => s.code.toUpperCase() === code.toUpperCase());

    if (!shipment) {
      // Create a dynamic valid shipment entry for any custom resi input
      shipment = {
        code: code.toUpperCase(),
        service: 'Velo Express',
        sender: 'Pengirim Terverifikasi VeloShip',
        receiver: 'Penerima Terdaftar',
        status: 'in-transit',
        statusText: 'Dalam Perjalanan Menuju Fasilitas Transit',
        date: 'Hari ini, 08:30 WIB',
        origin: 'Jakarta Hub',
        destination: 'Kota Tujuan',
        weight: '2.0 Kg',
        eta: '1-2 Hari Kerja',
        history: [
          {
            title: 'Paket sedang dalam perjalanan transit antar kota',
            location: 'Central Distribution Center',
            time: 'Hari ini, 08:30 WIB',
            status: 'current'
          },
          {
            title: 'Paket telah diverifikasi dan siap diberangkatkan',
            location: 'Origin Gateway Facility',
            time: 'Kemarin, 21:15 WIB',
            status: 'completed'
          },
          {
            title: 'Paket telah diterima di Kantor Cabang VeloShip',
            location: 'Drop Point VeloShip Pusat',
            time: 'Kemarin, 15:40 WIB',
            status: 'completed'
          }
        ]
      };
    }

    renderShipmentDetails(shipment);
    showToast(`Data resi ${shipment.code} berhasil ditemukan.`, 'success');
  }, 500);
}

function renderShipmentDetails(shipment) {
  const resultCard = document.getElementById('trackingResultCard');
  if (!resultCard) return;

  let badgeClass = 'in-transit';
  let badgeLabel = 'Dalam Perjalanan';

  if (shipment.status === 'delivered') {
    badgeClass = 'delivered';
    badgeLabel = 'Telah Diterima';
  } else if (shipment.status === 'out-for-delivery') {
    badgeClass = 'out-for-delivery';
    badgeLabel = 'Sedang Diantar Kurir';
  }

  let historyHtml = shipment.history.map(item => `
    <div class="timeline-step ${item.status}">
      <div class="timeline-marker">
        ${item.status === 'completed' ? getSvgIcon('check', 'icon-sm') : getSvgIcon('zap', 'icon-sm')}
      </div>
      <div class="timeline-content">
        <div class="timeline-title-row">
          <span class="timeline-event-name">${item.title}</span>
          <span class="timeline-timestamp">${item.time}</span>
        </div>
        <div class="timeline-location">
          ${getSvgIcon('mapPin', 'icon-sm')} ${item.location}
        </div>
      </div>
    </div>
  `).join('');

  resultCard.innerHTML = `
    <div class="tracking-header-bar">
      <div>
        <div class="meta-label">Nomor Resi Resmi</div>
        <div class="tracking-code-title">${shipment.code}</div>
        <div style="font-size: 0.88rem; color: var(--slate-600); margin-top: 0.25rem;">
          Layanan: <strong>${shipment.service}</strong>
        </div>
      </div>
      <div>
        <span class="status-badge ${badgeClass}">
          ${getSvgIcon('shield', 'icon-sm')} ${badgeLabel}
        </span>
      </div>
    </div>

    <div class="shipment-meta-grid">
      <div class="meta-block">
        <span class="meta-label">Kota Asal</span>
        <span class="meta-value">${shipment.origin}</span>
      </div>
      <div class="meta-block">
        <span class="meta-label">Kota Tujuan</span>
        <span class="meta-value">${shipment.destination}</span>
      </div>
      <div class="meta-block">
        <span class="meta-label">Estimasi Tiba</span>
        <span class="meta-value" style="color: var(--velo-orange);">${shipment.eta}</span>
      </div>
      <div class="meta-block">
        <span class="meta-label">Berat Kiriman</span>
        <span class="meta-value">${shipment.weight}</span>
      </div>
    </div>

    <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
      ${getSvgIcon('clock')} Riwayat Perjalanan Paket
    </h4>

    <div class="timeline-container">
      ${historyHtml}
    </div>
  `;

  resultCard.style.display = 'block';
  resultCard.classList.add('active');

  // Smooth scroll into tracking view
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Rate Calculator Logic
 */
function initCalculator() {
  const calcForm = document.getElementById('shippingCalcForm');
  if (calcForm) {
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateShippingRate();
    });

    // Auto calculate on input changes
    ['calcOrigin', 'calcDest', 'calcWeight', 'calcService'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.addEventListener('change', calculateShippingRate);
      }
    });
  }
}

function calculateShippingRate() {
  const origin = document.getElementById('calcOrigin')?.value || 'Jakarta';
  const dest = document.getElementById('calcDest')?.value || 'Surabaya';
  const weightInput = document.getElementById('calcWeight');
  const service = document.getElementById('calcService')?.value || 'express';

  const weight = Math.max(1, parseFloat(weightInput?.value) || 1);

  // Rate Matrix
  let baseRate = 18000;
  if (origin !== dest) {
    baseRate = 26000;
  }

  let multiplier = 1.0;
  let etaText = '2 - 3 Hari Kerja';
  let serviceName = 'Velo Regular';

  if (service === 'express') {
    multiplier = 1.35;
    etaText = 'Besok Tiba (Garansi 24 Jam)';
    serviceName = 'Velo Express';
  } else if (service === 'business') {
    multiplier = 1.20;
    etaText = '1 - 2 Hari (Prioritas Bisnis & SLA)';
    serviceName = 'Velo Business';
  } else if (service === 'cargo') {
    multiplier = 0.70;
    etaText = '3 - 5 Hari Kerja (Muatan Berat)';
    serviceName = 'Velo Cargo';
  } else {
    multiplier = 1.0;
    etaText = '2 - 3 Hari Kerja';
    serviceName = 'Velo Regular';
  }

  const total = Math.round(baseRate * weight * multiplier / 1000) * 1000;
  const formattedTotal = 'Rp ' + total.toLocaleString('id-ID');

  const resultPriceEl = document.getElementById('calcResultPrice');
  const resultEtaEl = document.getElementById('calcResultEta');
  const resultServiceEl = document.getElementById('calcResultService');
  const resultDetailRoute = document.getElementById('calcResultRoute');

  if (resultPriceEl) resultPriceEl.textContent = formattedTotal;
  if (resultEtaEl) resultEtaEl.textContent = etaText;
  if (resultServiceEl) resultServiceEl.textContent = serviceName;
  if (resultDetailRoute) resultDetailRoute.textContent = `${origin} menuju ${dest} (${weight} Kg)`;
}

/**
 * Authentication System (Modal, Login, Register, Session)
 */
function initAuthSystem() {
  const openModalBtns = document.querySelectorAll('.open-login-modal-btn');
  const modalBackdrop = document.getElementById('authModal');
  const closeModalBtn = document.getElementById('modalCloseBtn');
  const tabLoginBtn = document.getElementById('authTabLoginBtn');
  const tabRegisterBtn = document.getElementById('authTabRegisterBtn');
  const loginForm = document.getElementById('authLoginForm');
  const registerForm = document.getElementById('authRegisterForm');
  const demoLoginBtn = document.getElementById('demoLoginBtn');

  // Open modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openAuthModal('login');
    });
  });

  // Close modal
  if (closeModalBtn && modalBackdrop) {
    closeModalBtn.addEventListener('click', () => closeAuthModal());
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeAuthModal();
      }
    });
  }

  // Switch modal sub-tabs (Masuk / Daftar)
  if (tabLoginBtn && tabRegisterBtn) {
    tabLoginBtn.addEventListener('click', () => switchAuthForm('login'));
    tabRegisterBtn.addEventListener('click', () => switchAuthForm('register'));
  }

  // Password visibility toggles
  document.querySelectorAll('.toggle-password-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetInputId = btn.getAttribute('data-target-input');
      const input = document.getElementById(targetInputId);
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          btn.innerHTML = getSvgIcon('eyeOff', 'icon-sm');
        } else {
          input.type = 'password';
          btn.innerHTML = getSvgIcon('eye', 'icon-sm');
        }
      }
    });
  });

  // Login Submit
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value.trim();

      if (!email || !pass) {
        showToast('Lengkapi email dan kata sandi Anda.', 'warning');
        return;
      }

      handleLoginSuccess({
        name: email.split('@')[0],
        email: email,
        plan: 'Member Prioritas'
      });
    });
  }

  // Demo Login (Quick 1-click test for user convenience)
  if (demoLoginBtn) {
    demoLoginBtn.addEventListener('click', () => {
      handleLoginSuccess({
        name: 'Vincent Pratama',
        email: 'vincent@veloship.id',
        plan: 'Akun Bisnis Terverifikasi'
      });
    });
  }

  // Register Submit
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('regName').value.trim();
      const email = document.getElementById('regEmail').value.trim();
      const pass = document.getElementById('regPassword').value;
      const passConfirm = document.getElementById('regConfirmPassword').value;

      if (!name || !email || !pass) {
        showToast('Harap isi semua kolom pendaftaran.', 'warning');
        return;
      }

      if (pass !== passConfirm) {
        showToast('Konfirmasi kata sandi tidak cocok.', 'warning');
        return;
      }

      handleLoginSuccess({
        name: name,
        email: email,
        plan: 'Member Baru'
      });
    });
  }

  // Logout action
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', handleLogout);
  }
}

function openAuthModal(defaultTab = 'login') {
  const modal = document.getElementById('authModal');
  if (modal) {
    switchAuthForm(defaultTab);
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function switchAuthForm(type) {
  const tabLoginBtn = document.getElementById('authTabLoginBtn');
  const tabRegisterBtn = document.getElementById('authTabRegisterBtn');
  const loginForm = document.getElementById('authLoginForm');
  const registerForm = document.getElementById('authRegisterForm');

  if (type === 'login') {
    tabLoginBtn?.classList.add('active');
    tabRegisterBtn?.classList.remove('active');
    loginForm?.classList.add('active');
    registerForm?.classList.remove('active');
  } else {
    tabRegisterBtn?.classList.add('active');
    tabLoginBtn?.classList.remove('active');
    registerForm?.classList.add('active');
    loginForm?.classList.remove('active');
  }
}

function handleLoginSuccess(user) {
  closeAuthModal();
  VeloState.currentUser = user;
  localStorage.setItem('veloship_user', JSON.stringify(user));

  updateAuthUI();
  showToast(`Selamat datang kembali di VeloShip, ${user.name}!`, 'success');
  
  // Switch smoothly to Dashboard Tab
  switchTab('dashboard');
}

function handleLogout() {
  VeloState.currentUser = null;
  localStorage.removeItem('veloship_user');
  updateAuthUI();
  showToast('Anda telah keluar dari akun VeloShip.', 'info');
  switchTab('home');
}

function checkPersistedSession() {
  try {
    const saved = localStorage.getItem('veloship_user');
    if (saved) {
      VeloState.currentUser = JSON.parse(saved);
    }
  } catch (err) {
    console.error('Session restore error', err);
  }
  updateAuthUI();
}

function updateAuthUI() {
  const unauthArea = document.getElementById('unauthNavActions');
  const userArea = document.getElementById('userNavActions');
  const userNameEl = document.getElementById('navUserName');
  const userAvatarInitial = document.getElementById('navUserAvatarInitial');
  
  const dashboardName = document.getElementById('dashProfileName');
  const dashboardEmail = document.getElementById('dashProfileEmail');
  const dashboardBadge = document.getElementById('dashProfileBadge');

  if (VeloState.currentUser) {
    if (unauthArea) unauthArea.style.display = 'none';
    if (userArea) userArea.style.display = 'flex';
    if (userNameEl) userNameEl.textContent = VeloState.currentUser.name;
    if (userAvatarInitial) userAvatarInitial.textContent = VeloState.currentUser.name.charAt(0).toUpperCase();

    if (dashboardName) dashboardName.textContent = VeloState.currentUser.name;
    if (dashboardEmail) dashboardEmail.textContent = VeloState.currentUser.email;
    if (dashboardBadge) dashboardBadge.textContent = VeloState.currentUser.plan;

    // Show dashboard tab button in nav
    const dashTabBtn = document.getElementById('navTabDashboard');
    if (dashTabBtn) dashTabBtn.style.display = 'inline-flex';
  } else {
    if (unauthArea) unauthArea.style.display = 'flex';
    if (userArea) userArea.style.display = 'none';
    
    // Hide dashboard tab button in nav
    const dashTabBtn = document.getElementById('navTabDashboard');
    if (dashTabBtn) dashTabBtn.style.display = 'none';
  }
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        // Close others for clean single-view
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });
}

/**
 * Contact Form Handler (Direct to WhatsApp 0815-1766-6126)
 */
function initContactForm() {
  const contactForm = document.getElementById('contactUsForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !message) {
        showToast('Mohon lengkapi nama dan pesan Anda.', 'warning');
        return;
      }

      const textMessage = `Halo Customer Service VeloShip, nama saya ${name}.\n\nKeperluan/Pesan: ${message}`;
      const waUrl = `https://wa.me/6281517666126?text=${encodeURIComponent(textMessage)}`;
      
      showToast('Menghubungkan ke WhatsApp Customer Service VeloShip (0815-1766-6126)...', 'success');
      window.open(waUrl, '_blank');
      contactForm.reset();
    });
  }
}

/**
 * Copy Promo Voucher Code Helper
 */
function copyVoucherCode(code) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(() => {
      showToast(`Kode promo ${code} berhasil disalin!`, 'success');
    }).catch(() => {
      fallbackCopyText(code);
    });
  } else {
    fallbackCopyText(code);
  }
}

function fallbackCopyText(text) {
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast(`Kode promo ${text} berhasil disalin!`, 'success');
}

/**
 * Toast Notifications
 */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let iconName = 'shield';
  if (type === 'success') iconName = 'check';
  if (type === 'warning') iconName = 'zap';

  toast.innerHTML = `
    ${getSvgIcon(iconName)}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger reflow & show
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  // Auto hide after 4 seconds
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}
