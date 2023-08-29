import { ChangeEvent, useState } from 'react'
import { useFormik } from 'formik'
import { EncoderValidator } from '../Validators'
import { FormikValidator } from '../shared/utility'
import { FormikErrorMessage } from '../components'
import { EncodingEnum } from '../StreamEnums'

interface Props {
  handleCloseIntermediateModal: () => void
}

const Encoder = (props: Props): JSX.Element => {
  const [showInput, setShowInput] = useState<string>(EncodingEnum.copy)

  const EncoderFormik = useFormik<EncoderValidator>({
    initialValues: {
      encoding: EncodingEnum.copy,
      source: [],
      audioBitrate: null,
      videoBitrate: null,
      width: null,
      height: null,
      codecVideo: '',
      codecAudio: ''
    },
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log('Encoder Response >>', values)
    },
    validate: FormikValidator.validator(EncoderValidator)
  })

  return (
    <>
      <div className="w-full h-[100%] overflow-hidden bg-modal_bg flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 z-10">
        <div className="layout-outlet w-6/12 m-auto relative p-3 bg-white rounded-xl relative">
          <div className={'output_container'}>
            <form className="mt-5" onSubmit={EncoderFormik.handleSubmit}>
              <div className="flex items-end justify-between">
                <h1 className="text-2xl font-semibold text-black">Input</h1>
                <select
                  className="select_protocol w-select_input py-3 px-4 bg-white border border-black rounded-5 appearance-none cursor-pointer outline-none text-base font-normal"
                  name="encoding"
                  id="encoding"
                  onChange={(e) => {
                    setShowInput(e.target.value)
                    EncoderFormik.handleChange(e)
                  }}
                  onBlur={EncoderFormik.handleBlur}
                >
                  <option value={EncodingEnum.copy}>Copy</option>
                  <option value={EncodingEnum.software}>SoftWare</option>
                  <option value={EncodingEnum.nvidia}>Nvidia</option>
                </select>
              </div>
              <FormikErrorMessage
                formik={EncoderFormik}
                name={'encoding'}
                render={(error) => <span className="error text-red-500 float-right">{error}</span>}
              />
              <div className={'mt-5'}>
                <select
                  className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                  name="source"
                  id="source"
                  placeholder="Video Stream"
                  onBlur={EncoderFormik.handleBlur}
                  onChange={EncoderFormik.handleChange}
                >
                  <option value="One">One</option>
                  <option value="two">Two</option>
                  <option value="three">Three</option>
                  <option value="four">Four</option>
                  <option value="five">Five</option>
                </select>
                <FormikErrorMessage
                  formik={EncoderFormik}
                  name={'source'}
                  render={(error) => <span className="error text-red-500">{error}</span>}
                />

                {showInput === EncodingEnum.copy && (
                  <>
                    <div className="grid grid-cols-2 w-full gap-4 mt-4">
                      <div className="relative w-full">
                        <label
                          htmlFor="audioBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Audio Bitrate
                        </label>
                        <input
                          type="number"
                          name="audioBitrate"
                          id="audioBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'audioBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="videoBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Bitrate
                        </label>
                        <input
                          type="number"
                          name="videoBitrate"
                          id="videoBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'videoBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="width"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Width
                        </label>
                        <input
                          type="number"
                          name="width"
                          id="width"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'width'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="height"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Height
                        </label>
                        <input
                          type="number"
                          name="height"
                          id="height"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'height'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                    </div>
                  </>
                )}

                {showInput === EncodingEnum.software && (
                  <>
                    <div className="grid grid-cols-2 w-full gap-4 mt-4">
                      <div>
                        <select
                          name="codecVideo"
                          id="codecVideo"
                          placeholder="VideoCodec"
                          className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        >
                          <option value="VideoCodec" disabled={true} selected={true}>
                            Video Codec
                          </option>
                          <option value="h264">H264</option>
                          <option value="h265">H265</option>
                          <option value="mpeg1">MPEG1</option>
                          <option value="mpeg2">MPEG2</option>
                          <option value="mpeg4">MPEG4</option>
                          <option value="vp8">VP8</option>
                          <option value="vp9">VP9</option>
                        </select>
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'codecVideo'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div>
                        <select
                          name="codecAudio"
                          id="codecAudio"
                          placeholder="AudioCodec"
                          className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        >
                          <option value="VideoCodec" disabled={true} selected={true}>
                            Audio Codec
                          </option>
                          <option value="aac">AAC</option>
                          <option value="ac3">AC3</option>
                          <option value="mp3">MP3</option>
                          <option value="mp2">MP2</option>
                          <option value="opus">Opus</option>
                          <option value="vorbis">Vorbis</option>
                        </select>
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'codecAudio'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="audioBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Audio Bitrate
                        </label>
                        <input
                          type="number"
                          name="audioBitrate"
                          id="audioBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'audioBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="videoBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Bitrate
                        </label>
                        <input
                          type="number"
                          name="videoBitrate"
                          id="videoBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'videoBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="width"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Width
                        </label>
                        <input
                          type="number"
                          name="width"
                          id="width"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'width'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="height"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Height
                        </label>
                        <input
                          type="number"
                          name="height"
                          id="height"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'height'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                    </div>
                  </>
                )}

                {showInput === EncodingEnum.nvidia && (
                  <>
                    <div className="grid grid-cols-2 w-full gap-4 mt-4">
                      <div>
                        <select
                          name="codecVideo"
                          id="codecVideo"
                          placeholder="VideoCodec"
                          className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        >
                          <option value="VideoCodec" disabled={true} selected={true}>
                            Video Codec
                          </option>
                          <option value="h264">H264</option>
                          <option value="h265">H265</option>
                          <option value="mpeg1">MPEG1</option>
                          <option value="mpeg2">MPEG2</option>
                          <option value="mpeg4">MPEG4</option>
                          <option value="vp8">VP8</option>
                          <option value="vp9">VP9</option>
                        </select>
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'codecVideo'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div>
                        <select
                          name="codecAudio"
                          id="codecAudio"
                          placeholder="AudioCodec"
                          className="select_protocol py-3 px-4 bg-white border border-output_input_border rounded-5 appearance-none cursor-pointer outline-none text-base font-normal w-full"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        >
                          <option value="VideoCodec" disabled={true} selected={true}>
                            Audio Codec
                          </option>
                          <option value="aac">AAC</option>
                          <option value="ac3">AC3</option>
                          <option value="mp3">MP3</option>
                          <option value="mp2">MP2</option>
                          <option value="opus">Opus</option>
                          <option value="vorbis">Vorbis</option>
                        </select>
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'codecAudio'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="audioBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Audio Bitrate
                        </label>
                        <input
                          type="number"
                          name="audioBitrate"
                          id="audioBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'audioBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="videoBitrate"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Bitrate
                        </label>
                        <input
                          type="number"
                          name="videoBitrate"
                          id="videoBitrate"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'videoBitrate'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="width"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Width
                        </label>
                        <input
                          type="number"
                          name="width"
                          id="width"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'width'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                      <div className="relative w-full">
                        <label
                          htmlFor="height"
                          className="udp_label absolute left-2.5 -top-2.5 bg-white py-0.5 px-1 transition-all z-10 text-nonActive text-xs font-normal"
                        >
                          Video Height
                        </label>
                        <input
                          type="number"
                          name="height"
                          id="height"
                          placeholder="0"
                          className="udp_input p-3 w-full border border-output_input_border bg-white rounded-5 transition-all text-black text-base font-normal appearance-none outline-none"
                          onBlur={EncoderFormik.handleBlur}
                          onChange={EncoderFormik.handleChange}
                        />
                        <FormikErrorMessage
                          formik={EncoderFormik}
                          name={'height'}
                          render={(error) => <span className="error text-red-500">{error}</span>}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className={'form_buttons mt-4 flex items-center justify-between'}>
                <button
                  onClick={props.handleCloseIntermediateModal}
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

export default Encoder
