import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProtocolValidator {
  @IsString()
  @IsNotEmpty({ message: 'Invalid Protocol' })
  address: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid Protocol' })
  addressTwo: string

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Width' })
  width: number

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Height Number' })
  height: number

  @IsString()
  @IsNotEmpty({ message: 'Invalid Codec' })
  codec: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid Input' })
  output_protocol: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid Audio' })
  audio: string

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Video' })
  video: string

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Width' })
  widthTwo: string

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Height' })
  heightTwo: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid Audio' })
  audioTwo: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid Video' })
  videoTwo: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid codec audio' })
  codec_audio: string

  @IsString()
  @IsNotEmpty({ message: 'Invalid codec video' })
  codec_video: string

  @IsNumber()
  @IsNotEmpty({ message: 'Invalid Port' })
  port: number
}
