import { useState } from 'react'
import { useFormik } from 'formik'
import { SourceValidator } from '../Validators'
import { FormikValidator } from '../shared/utility'
import { FormikErrorMessage } from '@renderer/components'
import { ProtocolAndStreamsEnum } from '../StreamEnums'

interface Props {
  handleCloseSourceModal: () => void
}

const Source = (props: Props): JSX.Element => {
  const [showInput, setShowInput] = useState<string>(ProtocolAndStreamsEnum.udp)

  const SourceFormik = useFormik<SourceValidator>({
    initialValues: {
      protocol: ProtocolAndStreamsEnum.udp,
      address: '',
      port: '',
      path: '',
      url: '',
      nic: ''
    },
    onSubmit: (values) => {
      console.log('Source response >>', values)
    },
    validate: FormikValidator.validator(SourceValidator)
  })

  return (
    <>
      <div className="w-full h-[100%] overflow-hidden bg-modal_bg flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="layout-outlet w-6/12 m-auto relative p-3 bg-white rounded-xl relative">
          <div className={'output_container'}>
            <form onSubmit={SourceFormik.handleSubmit}>
              <div className="flex items-end justify-between">
                <h1 className="text-2xl font-semibold text-black">Input</h1>
                <select
                  className="select_protocol w-select_input py-3 px-4 bg-white border border-black rounded-5 appearance-none cursor-pointer outline-none text-base font-normal"
                  name="protocol"
                  id="protocol"
                  onChange={(e) => {
                    setShowInput(e.target.value)
                    SourceFormik.handleChange(e)
                  }}
                  onBlur={SourceFormik.handleBlur}
                >
                  <option value={ProtocolAndStreamsEnum.udp}>Udp</option>
                  <option value={ProtocolAndStreamsEnum.file}>File</option>
                  <option value={ProtocolAndStreamsEnum.rtsp}>Rtsp</option>
                  <option value={ProtocolAndStreamsEnum.rtp}>Rtp</option>
                  <option value={ProtocolAndStreamsEnum.srt}>Srt</option>
                  <option value={ProtocolAndStreamsEnum.rtmp}>Rtmp</option>
                  <option value={ProtocolAndStreamsEnum.hls}>Hls</option>
                  <option value={ProtocolAndStreamsEnum.dash}>Dash</option>
                  <option value={ProtocolAndStreamsEnum.httpflv}>Http Hlv</option>
                </select>
              </div>
              <FormikErrorMessage
                formik={SourceFormik}
                name={'protocol'}
                render={(error) => <span className="error text-red-500 float-right">{error}</span>}
              />
              <div className="flex items-center gap-3 w-full mt-5">
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500 ">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.file && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="path"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Path
                      </label>
                      <input
                        type="text"
                        name="path"
                        id="path"
                        placeholder="Path"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'path'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.rtsp && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Url"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'url'}
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500 ">{error}</span>}
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
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
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'port'}
                        render={(error) => <span className="error text-red-500 ">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.rtmp && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Url"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.hls && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Url"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.dash && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Url"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                {showInput === ProtocolAndStreamsEnum.httpflv && (
                  <>
                    <div className="relative w-full">
                      <label
                        htmlFor="url"
                        className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                      >
                        Url
                      </label>
                      <input
                        type="url"
                        name="url"
                        id="url"
                        placeholder="Url"
                        className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                        onBlur={SourceFormik.handleBlur}
                        onChange={SourceFormik.handleChange}
                      />
                      <FormikErrorMessage
                        formik={SourceFormik}
                        name={'url'}
                        render={(error) => <span className="error text-red-500">{error}</span>}
                      />
                    </div>
                  </>
                )}

                <div className={'w-full'}>
                  <select
                    className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                    name="nic"
                    id="nic"
                    onChange={SourceFormik.handleChange}
                    onBlur={SourceFormik.handleBlur}
                  >
                    <option value="NIC Card" disabled={true} selected={true}>
                      NIC Card
                    </option>
                    <option value="eth0">eth0</option>
                  </select>
                  <FormikErrorMessage
                    formik={SourceFormik}
                    name={'nic'}
                    render={(error) => <span className="error text-red-500">{error}</span>}
                  />
                </div>
              </div>

              <div className={'form_buttons mt-4 flex items-center justify-between'}>
                <button
                  onClick={props.handleCloseSourceModal}
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

export default Source
