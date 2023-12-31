import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf
} from 'class-validator'
import { EncodingEnum } from '../StreamEnums'

export class EncoderValidator {
  @IsEnum(EncodingEnum)
  @IsNotEmpty({ message: 'encoding should not be empty' })
  encoding: EncodingEnum

  // @IsMongoId({ each: true })
  @IsString()
  @IsNotEmpty({ message: 'source should not be empty' })
  source: string[]

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'audioBitrate must be a number conforming to the specified constraints' })
  // @ValidateIf((object: EncoderValidator, value: string) => {
  //   return (
  //     !!value &&
  //     (object.encoding === EncodingEnum.copy ||
  //       object.encoding === EncodingEnum.software ||
  //       object.encoding === EncodingEnum.nvidia)
  //   )
  // })
  audioBitrate: string

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'videoBitrate must be a number conforming to the specified constraints' })
  // @ValidateIf((object: EncoderValidator, value: string) => {
  //   return (
  //     !!value &&
  //     (object.encoding === EncodingEnum.copy ||
  //       object.encoding === EncodingEnum.software ||
  //       object.encoding === EncodingEnum.nvidia)
  //   )
  // })
  videoBitrate: string

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'width must be a number conforming to the specified constraints' })
  @ValidateIf((object: EncoderValidator, value: string) => {
    return (
      !!value &&
      (object.encoding === EncodingEnum.software || object.encoding === EncodingEnum.nvidia)
    )
  })
  width: string

  @IsString()
  @IsOptional()
  @IsNotEmpty({ message: 'height must be a number conforming to the specified constraints' })
  @ValidateIf((object: EncoderValidator, value: string) => {
    return (
      !!value &&
      (object.encoding === EncodingEnum.software || object.encoding === EncodingEnum.nvidia)
    )
  })
  height: string

  @IsString()
  @IsNotEmpty({
    message: 'codecAudio must be one of the following values: aac, mp2, ac3, opus, vorbis, mp3'
  })
  codecAudio: string

  @IsString()
  @IsNotEmpty({
    message:
      'codecVideo must be one of the following values: h264, hevc, mpeg1video, mpeg2video, mpeg4, vp8, vp9'
  })
  codecVideo: string
}
