import { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import { OutputValidator } from '../Validators'
import { FormikValidator } from '../shared/utility'
import { FormikErrorMessage } from '../components'
import { ProtocolAndStreamsEnum } from '../StreamEnums'

interface Props {
  handleCloseOutputModal: () => void
}

const Output = (props: Props): JSX.Element => {
  const [showInput, setShowInput] = useState<string>(ProtocolAndStreamsEnum.udp)

  const OutputFormik = useFormik<OutputValidator>({
    initialValues: {
      protocol: ProtocolAndStreamsEnum.udp,
      streams: [],
      address: '',
      port: '',
      url: ''
    },
    onSubmit: (values) => {
      console.log('Values', values)
    },
    validate: FormikValidator.validator(OutputValidator)
  })
  const handleStreamChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    OutputFormik.setFieldValue('streams', [event.currentTarget.value])
  }
  return (
    <>
      <div className="w-full h-[100%] overflow-hidden bg-modal_bg flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="layout-outlet w-6/12 m-auto relative p-3 bg-white rounded-xl relative">
          <div className={'output_container'}>
            <form onSubmit={OutputFormik.handleSubmit}>
              <div className="flex items-end justify-between">
                <h1
                  className="text-2xl font-semibold text-black"
                  onClick={props.handleCloseOutputModal}
                >
                  Input
                </h1>
                <select
                  className="select_protocol w-select_input py-3 px-4 bg-white border border-black rounded-5 appearance-none cursor-pointer outline-none text-base font-normal"
                  name="protocol"
                  id="protocol"
                  onChange={(e) => {
                    setShowInput(e.target.value)
                    OutputFormik.handleChange(e)
                  }}
                  onBlur={OutputFormik.handleBlur}
                >
                  {/*<option value="Protocols" selected={true} disabled={true}>*/}
                  {/*  Protocols*/}
                  {/*</option>*/}

                  <option value={ProtocolAndStreamsEnum.udp}>UDP</option>
                  <option value={ProtocolAndStreamsEnum.rtp}>RTP</option>
                  <option value={ProtocolAndStreamsEnum.srt}>SRT</option>
                  <option value={ProtocolAndStreamsEnum.rtsp}>RTSP</option>
                  <option value={ProtocolAndStreamsEnum.rtmp}>RTMP</option>
                  <option value={ProtocolAndStreamsEnum.httpflv}>HTTP FLV</option>
                  <option value={ProtocolAndStreamsEnum.lhls}>Low Latency HLS</option>
                  <option value={ProtocolAndStreamsEnum.hls}>HLS</option>
                  <option value={ProtocolAndStreamsEnum.dash}>DASH</option>
                  <option value={ProtocolAndStreamsEnum.WebRTC}>WebRTC</option>
                </select>
              </div>
              <FormikErrorMessage
                formik={OutputFormik}
                name={ProtocolAndStreamsEnum.udp}
                render={(error) => <span className="error text-red-500">{error}</span>}
              />

              <select
                className="select_protocol mt-5 py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                name="streams"
                id="streams"
                onBlur={OutputFormik.handleBlur}
                onChange={handleStreamChange}
              >
                <option value="VideoStreams" disabled={true} selected={true}>
                  Video Streams
                </option>
                <option value="streamOne">Stream One</option>
                <option value="StreamTwo">Stream Two</option>
                <option value="StreamThree">Stream Three</option>
              </select>
              <FormikErrorMessage
                formik={OutputFormik}
                name={'streams'}
                render={(error) => <span className="error text-red-500">{error}</span>}
              />
              <div className="flex items-center gap-3 w-full mt-3">
                {showInput === ProtocolAndStreamsEnum.udp && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="address"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'address'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                    <div className="relative w-full">
                      <label
                        htmlFor="port"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Port
                      </label>
                      <input
                        type="text"
                        name="port"
                        id="port"
                        placeholder="Port"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.rtp && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="address"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'address'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                    <div className="relative w-full">
                      <label
                        htmlFor="port"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Port
                      </label>
                      <input
                        type="text"
                        name="port"
                        id="port"
                        placeholder="Port"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.srt && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="address"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        placeholder="Address"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'address'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                    <div className="relative w-full">
                      <label
                        htmlFor="port"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Port
                      </label>
                      <input
                        type="text"
                        name="port"
                        id="port"
                        placeholder="Port"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.rtsp && (
                  <>
                    <div className="relative w-full flex flex-col">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        External Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="0"
                        className="udp_input p-3 w-6/12 border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.rtmp && (
                  <>
                    <div className="relative w-full flex flex-col">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        External Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="0"
                        className="udp_input p-3 w-6/12 border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={OutputFormik.handleBlur}
                        onChange={OutputFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={OutputFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className={'form_buttons mt-4 flex items-center justify-between'}>
                <button
                  onClick={props.handleCloseOutputModal}
                  className="text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-2 px-4 rounded-md hover:text-black transition-all"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className={
                    'text-base font-normal leading-5 text-nonActive bg-nonActiveBg cursor-pointer py-2 px-4 rounded-md hover:text-black transition-alll'
                  }
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Output
