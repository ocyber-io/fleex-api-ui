import { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { FormikValidator } from '../shared/utility'
import { ProtocolValidator } from '../Validators'
import { FormikErrorMessage } from './ErrorMessaage'

const Protocols = (): JSX.Element => {
  const [input, selectInput] = useState('Udp Input')
  const selectRef = useRef(null)

  const ChangeInp = (e) => {
    const input = e.target.value
    selectInput(input)
  }

  const protocolsFormik = useFormik<ProtocolValidator>({
    initialValues: {
      address: '',
      addressTwo: '',
      width: '',
      height: '',
      codec: '',
      output_protocol: '',
      audio: '',
      video: '',
      widthTwo: '',
      heightTwo: '',
      audioTwo: '',
      videoTwo: '',
      codec_audio: '',
      codec_video: '',
      port: ''
    },
    onSubmit: (values) => {
      console.log('Submit Values ==>', values)
    },

    validate: FormikValidator.validator(ProtocolValidator)
  })

  const inpRef = useRef(null)
  const defaultValue = (e) => {
    e.preventDefault()
    console.log(inpRef.current.value)
  }

  return (
    <>
      <div className="protocols">
        <div className="w-container m-auto">
          <div className="flex items-end justify-between mt-5 mb-3">
            <h1 className="text-2xl font-semibold text-black">Input</h1>
            <select
              className="select_protocol w-select_input py-3 px-4 bg-white border border-black rounded-5 appearance-none cursor-pointer outline-none text-base font-normal"
              name="protocols"
              id="protocols"
              onChange={ChangeInp}
              ref={selectRef}
            >
              <option value="Udp Input">Udp</option>
              <option value="File Input">File</option>
              <option value="Rtsp Input">Rtsp</option>
              <option value="Rtp Input">Rtp</option>
              <option value="Srt Input">Srt</option>
              <option value="Rtmp Input">Rtmp</option>
              <option value="Hls Input">Hls</option>
              <option value="Dash Input">Dash</option>
              <option value="Http Hlv Input">Http Hlv</option>
            </select>
          </div>
          <div className="input_protocol p-4 bg-white rounded-8 shadow-protocols_shadow">
            <h1 className="text-sm font-medium leading-4 text-black">{input}</h1>
            <form onSubmit={protocolsFormik.handleSubmit}>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-full relative">
                  <input
                    ref={inpRef}
                    type="text"
                    name="address"
                    id="address"
                    placeholder={input}
                    className="udp_input p-4 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                    onBlur={protocolsFormik.handleBlur}
                    onChange={protocolsFormik.handleChange}
                  />
                  <label
                    htmlFor="address"
                    className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                  >
                    Address
                  </label>
                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="address"
                    render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
                  />
                </div>
                <div className="w-full relative">
                  <input
                    ref={inpRef}
                    type="text"
                    name="addressTwo"
                    id="addressTwo"
                    placeholder={input}
                    className="udp_input p-4 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                    onBlur={protocolsFormik.handleBlur}
                    onChange={protocolsFormik.handleChange}
                  />
                  <label
                    htmlFor="addressTwo"
                    className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                  >
                    Address
                  </label>
                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="addressTwo"
                    render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
                  />
                </div>
              </div>

              <button
                className="mt-3 border rounded-2xl py-2 px-5"
                type={'submit'}
                onClick={defaultValue}
              >
                add
              </button>
            </form>
          </div>
          {/*OUTPUT INPUTS*/}

          <div className="flex items-end justify-between mt-5 mb-3">
            <h1 className="text-2xl font-semibold text-black">Output</h1>
            <select
              className="select_protocol_output w-select_input py-3 px-4 bg-black text-white border border-black rounded-5 appearance-none cursor-pointer outline-none"
              name="protocols"
              id="protocols"
            >
              <option value="add output" selected={true} disabled={true}>
                Add Output
              </option>
              <option value="rtmp">RTMP</option>
              <option value="file">FILE</option>
              <option value="rtsp">RTSP</option>
            </select>
          </div>

          <div className="output_details bg-white p-4 rounded-8 shadow-protocols_shadow">
            <div>
              <div className="flex items-center justify-between pb-3">
                <h1 className="text-sm font-medium text-black">http-flv</h1>
                <p className="text-sm font-medium text-output_remove cursor-pointer">Remove</p>
              </div>
              <div className="flex items-center gap-4 w-full border-output_http_border">
                <div className="relative flex items-center border border-output_input_border rounded-5 w-full">
                  <label className="absolute -top-2.5 left-3 bg-white py-0.5 px-1 text-xs font-normal text-nonActive">
                    Resolution
                  </label>
                  <div className="w-full">
                    <input
                      className="border-none outline-none px-4 my-4 w-full text-base font-normal text-nonActive placeholder-nonActive outline-none"
                      type="number"
                      name="width"
                      id="width"
                      placeholder="Width"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      className="outline-none px-4 my-4 w-full text-base font-normal text-nonActive border-l border-output_input_border placeholder-nonActive outline-none"
                      type="number"
                      name="height"
                      id="height"
                      placeholder="Height"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                  </div>
                </div>

                <div className="relative flex items-center border border-output_input_border rounded-5 w-full">
                  <label className="absolute -top-2.5 left-3 bg-white py-0.5 px-1 text-xs font-normal text-nonActive">
                    Bitrate
                  </label>
                  <div className="w-full">
                    <input
                      className="border-none outline-none px-4 my-4 w-full text-base font-normal text-nonActive placeholder-nonActive outline-none"
                      type="text"
                      name="audio"
                      id="audio"
                      placeholder="Audio"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                    <FormikErrorMessage
                      formik={protocolsFormik}
                      name="audio"
                      render={(error) => (
                        <span className="error text-red-500 absolute left-0 -bottom-8">
                          {error}
                        </span>
                      )}
                    />
                  </div>
                  <div className="w-full ">
                    <input
                      className="outline-none px-4 my-4 w-full text-base font-normal text-nonActive border-l border-output_input_border placeholder-nonActive outline-none"
                      type="text"
                      name="video"
                      id="video"
                      placeholder="Video"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />

                    <FormikErrorMessage
                      formik={protocolsFormik}
                      name="video"
                      render={(error) => (
                        <span className="error text-red-500 mt-1.5 absolute -bottom-8 right-44">
                          {error}
                        </span>
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center w-6/12 justify-between">
                <FormikErrorMessage
                  formik={protocolsFormik}
                  name="width"
                  render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
                />

                <FormikErrorMessage
                  formik={protocolsFormik}
                  name="height"
                  render={(error) => (
                    <span className="error text-red-500 mt-1.5 mr-32">{error}</span>
                  )}
                />
              </div>

              <div className="w-full mt-4">
                <select
                  className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none text-nonActive cursor-pointer outline-none w-49"
                  name="codec"
                  id="codec"
                  onBlur={protocolsFormik.handleBlur}
                  onChange={protocolsFormik.handleChange}
                >
                  <option value="Codec" disabled={true} selected={true}>
                    Codec
                  </option>
                  <option value="rtmp">One</option>
                  <option value="file">Two</option>
                  <option value="Three">Three</option>
                </select>
              </div>
              <FormikErrorMessage
                formik={protocolsFormik}
                name="codec"
                render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
              />

              <hr className="mt-4 border-none bg-output_http_border h-1" />
            </div>

            {/*BOTTOM SIDE */}

            <div>
              <div className="flex items-center justify-between pb-3 pt-4">
                <h1 className="text-sm font-medium text-black">UDP</h1>
                <p className="text-sm font-medium text-output_remove cursor-pointer">Remove</p>
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <div className="w-6/12 relative w-full">
                    <input
                      type="text"
                      name="output_protocol"
                      id="output_protocol"
                      placeholder="UDP input"
                      className="udp_input p-4 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                    <label
                      htmlFor="output_protocol"
                      className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                    >
                      Address
                    </label>
                    <FormikErrorMessage
                      formik={protocolsFormik}
                      name="output_protocol"
                      render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
                    />
                  </div>
                  <div className="relative flex items-center border border-output_input_border rounded-5 w-full">
                    <label className="absolute -top-2.5 left-3 bg-white py-0.5 px-1 text-xs font-normal text-nonActive">
                      Resolution
                    </label>
                    <input
                      className="border-none outline-none px-4 my-4 w-full text-base font-normal text-nonActive placeholder-nonActive outline-none w-full"
                      type="number"
                      name="widthTwo"
                      id="widthTwo"
                      placeholder="Width"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                    <input
                      className="outline-none px-4 my-4 w-full text-base font-normal text-nonActive border-l border-output_input_border placeholder-nonActive outline-none w-full"
                      type="number"
                      name="heightTwo"
                      id="heightTwo"
                      placeholder="Height"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between w-6/12 ml-auto">
                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="widthTwo"
                    render={(error) => <span className="error text-red-500 z-10">{error}</span>}
                  />

                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="heightTwo"
                    render={(error) => <span className="error text-red-500 z-10">{error}</span>}
                  />
                </div>

                <div className="flex items-center gap-4 w-full border-output_http_border mt-4">
                  <div className="relative flex items-center border border-output_input_border rounded-5 w-full">
                    <label className="absolute -top-2.5 left-3 bg-white py-0.5 px-1 text-xs font-normal text-nonActive">
                      Bitrate
                    </label>
                    <div className="w-full">
                      <input
                        className="border-none outline-none px-4 my-4 text-base font-normal text-nonActive placeholder-nonActive outline-none w-full"
                        type="text"
                        name="audioTwo"
                        id="audioTwo"
                        placeholder="Audio"
                        onBlur={protocolsFormik.handleBlur}
                        onChange={protocolsFormik.handleChange}
                      />
                    </div>
                    <div className="w-full">
                      <input
                        className="outline-none px-4 my-4 text-base font-normal text-nonActive border-l border-output_input_border placeholder-nonActive outline-none w-full"
                        type="text"
                        name="videoTwo"
                        id="videoTwo"
                        placeholder="Video"
                        onBlur={protocolsFormik.handleBlur}
                        onChange={protocolsFormik.handleChange}
                      />
                    </div>
                  </div>

                  <div className="relative flex items-center border border-output_input_border rounded-5 w-full">
                    <label className="absolute -top-2.5 left-3 bg-white py-0.5 px-1 text-xs font-normal text-nonActive">
                      Codec
                    </label>
                    <select
                      className="codec_select_input border-none outline-none px-4 my-4 w-full text-nonActive text-base font-normal text-nonActive appearance-none cursor-pointer"
                      name="codec_audio"
                      id="codec_audio"
                      placeholder="Audio"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    >
                      <option value="audio">Audio</option>
                      <option value="audio">Audio</option>
                      <option value="audio">Audio</option>
                      <option value="audio">Audio</option>
                    </select>
                    <FormikErrorMessage
                      formik={protocolsFormik}
                      name="codec_audio"
                      render={(error) => (
                        <span className="error text-red-500 mt-1.5 absolute left-0 -bottom-6">
                          {error}
                        </span>
                      )}
                    />
                    <select
                      className="codec_select_input border-l outline-none px-4 my-4 w-full text-base text-nonActive font-normal text-nonActive appearance-none cursor-pointer"
                      name="codec_video"
                      id="codec_video"
                      placeholder="Audio"
                      onBlur={protocolsFormik.handleBlur}
                      onChange={protocolsFormik.handleChange}
                    >
                      <option value="Video">Video</option>
                      <option value="Video">Video</option>
                      <option value="Video">Video</option>
                      <option value="Video">Video</option>
                    </select>
                    <FormikErrorMessage
                      formik={protocolsFormik}
                      name="codec_video"
                      render={(error) => (
                        <span className="error text-red-500 mt-1.5 absolute -bottom-6 right-32">
                          {error}
                        </span>
                      )}
                    />
                  </div>
                </div>

                <div className="flex items-center w-6/12 justify-between">
                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="audioTwo"
                    render={(error) => <span className="error text-red-500">{error}</span>}
                  />

                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="videoTwo"
                    render={(error) => <span className="error text-red-500 mr-48">{error}</span>}
                  />
                </div>
                <div className="w-49 mt-4">
                  <input
                    type="number"
                    name="port"
                    id="port"
                    placeholder="Port"
                    className="udp_input p-4 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal placeholder-nonActive outline-none"
                    onBlur={protocolsFormik.handleBlur}
                    onChange={protocolsFormik.handleChange}
                  />
                  <FormikErrorMessage
                    formik={protocolsFormik}
                    name="port"
                    render={(error) => <span className="error text-red-500 mt-1.5">{error}</span>}
                  />
                </div>
              </div>

              <hr className="mt-4 border-none bg-output_http_border h-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Protocols
