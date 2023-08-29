// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  // content: ['./src/*/.tsx'],
  theme: {
    extend: {
      colors: {
        pink: '#FF3B89',
        black: '#231F20',
        nonActive: '#738BA9',
        nonActiveBg: '#F7F8FA',
        table_bottom_border: '#738BA933',
        stream_url: '#4a59d3',
        stream_bg: '#f2f9eb',
        stream: '#7dc139',
        pause_bg: '#e9e9e9',
        offline_bg: '#e2e2e4',
        play_bg: '#FFEBF3',
        output_input_border: 'rgba(115, 139, 169, 0.2)',
        output_remove: '#FF3B89',
        output_http_border: 'rgba(115, 139, 169, 0.40)',
        modal_bg: 'rgba(0, 0, 0, 0.5)'
      },
      width: {
        container: '1170px',
        82: '82px',
        select_input: '180px',
        49: '49.4%',
        48: '48%'
      },
      borderRadius: {
        10: '10px',
        50: '50px',
        5: '5px',
        8: '8px'
      },
      boxShadow: {
        protocols_shadow: '0px 8px 34px 0px rgba(16, 60, 84, 0.12)'
      },
      height: {
        1: '1px'
      },
      right: {
        180: '180px'
      }
    }
  },
  plugins: []
  // plugins: [require('tailwindcss'), require('autoprefixer')],
}

// module.exports = {
//   theme: {},
//   variants: {},
//   plugins: []
// };
