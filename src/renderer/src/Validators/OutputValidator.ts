import {
  IsEnum,
  IsIP,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
  IsUrl,
  ValidateIf
} from 'class-validator'
import { ProtocolAndStreamsEnum } from '../StreamEnums'

export class OutputValidator {
  @IsEnum(ProtocolAndStreamsEnum)
  @IsNotEmpty({
    message:
      'protocol must be one of the following values: udp, file, rtsp, rtp, srt, rtmp, WebRTC, hls, lhls, dash, http-flv'
  })
  protocol: ProtocolAndStreamsEnum

  @IsMongoId({ each: true })
  @IsNotEmpty({
    message: 'each value in streams must be a mongodb id'
  })
  streams: string[]

  @IsIP(4)
  @IsNotEmpty({
    message: 'address must be an ip address'
  })
  @ValidateIf((object: OutputValidator) => {
    return (
      object.protocol === ProtocolAndStreamsEnum.udp ||
      object.protocol === ProtocolAndStreamsEnum.rtp ||
      object.protocol === ProtocolAndStreamsEnum.srt
    )
  })
  address: string

  @IsPort()
  @IsNotEmpty({
    message: 'port must be a port'
  })
  @ValidateIf((object: OutputValidator) => {
    return (
      object.protocol === ProtocolAndStreamsEnum.udp ||
      object.protocol === ProtocolAndStreamsEnum.rtp ||
      object.protocol === ProtocolAndStreamsEnum.srt
    )
  })
  port: string

  @IsUrl({ protocols: ['rtsp', 'rtmp', 'rtsps', 'rtmps'] })
  @IsString()
  @IsOptional()
  @ValidateIf((object: OutputValidator, value: string) => {
    return (
      !!value &&
      (object.protocol === ProtocolAndStreamsEnum.rtmp ||
        object.protocol === ProtocolAndStreamsEnum.rtsp)
    )
  })
  url: string
}
