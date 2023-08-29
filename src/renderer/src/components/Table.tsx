import { useState } from 'react'
import PAUSE from '../assets/Images/pause.svg'
import PLAY from '../assets/Images/play.svg'
import Output from '../Modals/Output'
import Encoder from '../Modals/Encoder'
import Source from '../Modals/Source'

const Table = (): JSX.Element => {
  const [tabs, setTabs] = useState(1)
  const handleChangeTab = (value) => {
    setTabs(value)
  }

  const [outputStream, setOutputStream] = useState<boolean>(false)
  const [interMediateStream, setIntermediateStream] = useState<boolean>(false)
  const [sourceStream, setSourceStream] = useState<boolean>(false)
  const handleShowOutputModal = () => {
    setOutputStream(!outputStream)
  }

  const handleShowIntermediateModal = () => {
    setIntermediateStream(!interMediateStream)
  }

  const handleShowSourceStream = () => {
    setSourceStream(!sourceStream)
  }
  return (
    <>
      {outputStream && <Output handleCloseOutputModal={handleShowOutputModal} />}
      {interMediateStream && <Encoder handleCloseIntermediateModal={handleShowIntermediateModal} />}
      {sourceStream && <Source handleCloseSourceModal={handleShowSourceStream} />}
      <div className="tabs">
        <div className="w-container m-auto">
          <div className={'flex items-center justify-between'}>
            <div className="flex items-end gap-1.5">
              <h1
                onClick={() => handleChangeTab(1)}
                className={
                  tabs === 1
                    ? 'text-base font-semibold text-black bg-white cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                    : 'text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                }
              >
                Output
              </h1>
              <h1
                onClick={() => handleChangeTab(2)}
                className={
                  tabs === 2
                    ? 'text-base font-semibold text-black bg-white cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                    : 'text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                }
              >
                Encoder
              </h1>
              <h1
                onClick={() => handleChangeTab(3)}
                className={
                  tabs === 3
                    ? 'text-base font-semibold text-black bg-white cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                    : 'text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-tl-2xl rounded-tr-2xl'
                }
              >
                Source
              </h1>
            </div>

            <button
              onClick={handleShowOutputModal}
              className={
                tabs === 1
                  ? 'block text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-2xl hover:text-black transition-all'
                  : 'hidden'
              }
            >
              Add Stream
            </button>
            <button
              onClick={handleShowIntermediateModal}
              className={
                tabs === 2
                  ? 'block text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-2xl hover:text-black transition-all'
                  : 'hidden'
              }
            >
              Add Stream
            </button>
            <button
              onClick={handleShowSourceStream}
              className={
                tabs === 3
                  ? 'block text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-4 px-8 rounded-2xl hover:text-black transition-all'
                  : 'hidden'
              }
            >
              Add Stream
            </button>
          </div>

          <div className={tabs === 1 ? 'block' : 'hidden'}>
            <table className="w-full bg-white py-5 border-collapse rounded-tr-xl rounded-bl-xl rounded-br-xl ">
              <tr className="text-left border-b-2 border-table_bottom_border">
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">Sr</th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Protocol
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  URL
                </th>
                {/*<th className="text-base font-normal leading-5 text-nonActive text-left p-5">*/}
                {/*  Codec*/}
                {/*</th>*/}
                {/*<th className="text-base font-normal leading-5 text-nonActive text-left p-5">*/}
                {/*  Bitrate*/}
                {/*</th>*/}
                {/*<th className="text-base font-normal leading-5 text-nonActive text-left p-5">*/}
                {/*  Resolutions*/}
                {/*</th>*/}
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Status
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Online
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Action
                </th>
              </tr>
              <tr className="immerdiate_content text-left odd:bg-nonActiveBg">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                <td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">
                  https://www.feest.biz/vel-in-lab...
                </td>
                {/*<td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">*/}
                {/*  Audio: 12000 <br />*/}
                {/*  Video: 65000*/}
                {/*</td>*/}
                {/*<td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">*/}
                {/*  Audio: 12000 <br />*/}
                {/*  Video: 65000*/}
                {/*</td>*/}
                {/*<td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">*/}
                {/*  1920 x 1080*/}
                {/*</td>*/}
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-stream_bg text-stream leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-stream"></div>
                  Online
                </td>
                <td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">
                  ?
                </td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-pause_bg" src={PAUSE} alt="pause" />
                </td>
              </tr>
            </table>
          </div>

          <div className={tabs === 2 ? 'block' : 'hidden'}>
            <table className="w-full bg-white py-5 border-collapse rounded-tr-xl rounded-bl-xl rounded-br-xl">
              <tr className="text-left border-b-2 border-table_bottom_border">
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">Sr</th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Source
                </th>
                {/*<th className="text-base font-normal leading-5 text-nonActive text-left p-5">*/}
                {/*  URL*/}
                {/*</th>*/}
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Codec
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Bitrate
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Resolutions
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Status
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Online
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Action
                </th>
              </tr>
              <tr className="immerdiate_content text-left odd:bg-nonActiveBg">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                {/*<td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">*/}
                {/*  https://www.feest.biz/vel-in-lab...*/}
                {/*</td>*/}
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  1920 x 1080
                </td>
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-stream_bg text-stream leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-stream"></div>
                  Online
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">?</td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-pause_bg" src={PAUSE} alt="pause" />
                </td>
              </tr>
              <tr className="immerdiate_content text-left odd:bg-nonActiveBg">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                {/*<td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">*/}
                {/*  https://www.feest.biz/vel-in-lab...*/}
                {/*</td>*/}
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  1920 x 1080
                </td>
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-offline_bg leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-black"></div>
                  Offline
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">?</td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-play_bg" src={PLAY} alt="play" />
                </td>
              </tr>
            </table>
          </div>

          <div className={tabs === 3 ? 'block' : 'hidden'}>
            <table className="w-full bg-white py-5 border-collapse rounded-tr-xl rounded-bl-xl rounded-br-xl">
              <tr className="text-left border-b-2 border-table_bottom_border">
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">Sr</th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Protocol
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  URL
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Codec
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Bitrate
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Resolutions
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Status
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-0">
                  Online
                </th>
                <th className="text-base font-normal leading-5 text-nonActive text-left p-5">
                  Action
                </th>
              </tr>
              <tr className="immerdiate_content text-left">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                <td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">
                  https://www.feest.biz/vel-in-lab...
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  1920 x 1080
                </td>
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-stream_bg text-stream leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-stream"></div>
                  Online
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">?</td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-pause_bg" src={PAUSE} alt="pause" />
                </td>
              </tr>
              <tr className="immerdiate_content text-left">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                <td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">
                  https://www.feest.biz/vel-in-lab...
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  1920 x 1080
                </td>
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-offline_bg leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-black"></div>
                  Offline
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">?</td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-play_bg" src={PLAY} alt="play" />
                </td>
              </tr>
              <tr className="immerdiate_content text-left">
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">01</td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  UDP
                </td>
                <td className="stream_url leading-4 text-sm font-medium text-left text-stream_url py-4 px-5">
                  https://www.feest.biz/vel-in-lab...
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="td leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  Audio: 12000 <br />
                  Video: 65000
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">
                  1920 x 1080
                </td>
                <td className="online_status_td flex items-center gap-1 mt-6 py-1 px-2.5 rounded-50 w-82 bg-stream_bg text-stream leading-4 text-sm font-medium text-left text-black">
                  <div className="online_status w-2.5 h-2.5 rounded-full bg-stream"></div>
                  Online
                </td>
                <td className="leading-4 text-sm font-medium text-left text-black py-4 px-5">?</td>
                <td className="pause_icon text-right leading-4 text-sm font-medium text-black py-4 px-5">
                  <img className="p-2.5 rounded-10 bg-pause_bg" src={PAUSE} alt="pause" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table
