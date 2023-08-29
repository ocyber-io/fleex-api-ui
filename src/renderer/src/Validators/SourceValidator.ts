import {
  IsEnum,
  IsIP,
  IsNotEmpty,
  IsOptional,
  IsPort,
  IsString,
  IsUrl,
  ValidateIf
} from 'class-validator'
import { ProtocolAndStreamsEnum } from '../StreamEnums'

export class SourceValidator {
  @IsEnum(ProtocolAndStreamsEnum)
  @IsNotEmpty({
    message:
      'protocol must be one of the following values: udp, file, rtsp, rtp, srt, rtmp, hls, dash, http-flv'
  })
  protocol: ProtocolAndStreamsEnum

  @IsIP(4)
  @IsNotEmpty({ message: 'address must be a ip address' })
  @ValidateIf((object: SourceValidator) => {
    return (
      object.protocol === ProtocolAndStreamsEnum.udp ||
      object.protocol === ProtocolAndStreamsEnum.rtp ||
      object.protocol === ProtocolAndStreamsEnum.srt
    )
  })
  address: string

  @IsPort()
  @IsNotEmpty({ message: 'port should not be empty' })
  @ValidateIf((object: SourceValidator) => {
    return (
      object.protocol === ProtocolAndStreamsEnum.udp ||
      object.protocol === ProtocolAndStreamsEnum.rtp ||
      object.protocol === ProtocolAndStreamsEnum.srt
    )
  })
  port: string

  @IsString()
  @IsNotEmpty({ message: 'path should not be empty' })
  @ValidateIf((object: SourceValidator) => {
    return object.protocol === ProtocolAndStreamsEnum.file
  })
  path: string

  @IsUrl({
    protocols: [
      'rtmp',
      'rtmps',
      'rtsp',
      'rtsps',
      'hls',
      'hlss',
      'dash',
      'dashs',
      'httpflv',
      'httplfvs'
    ]
  })
  @IsOptional()
  @IsString()
  // @IsNotEmpty({ message: 'url should not be empty' })
  @ValidateIf((object: SourceValidator, value: string) => {
    return (
      !!value &&
      (object.protocol === ProtocolAndStreamsEnum.rtmp ||
        object.protocol === ProtocolAndStreamsEnum.rtsp ||
        object.protocol === ProtocolAndStreamsEnum.hls ||
        object.protocol === ProtocolAndStreamsEnum.dash ||
        object.protocol === ProtocolAndStreamsEnum.httpflv)
    )
  })
  url: string

  @IsOptional()
  @IsString()
  nic: string
}
