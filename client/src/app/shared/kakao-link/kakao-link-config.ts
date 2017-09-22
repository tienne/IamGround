export class KakaoLinkConfig {
  key: string;
  sdkType: KakaoSdkType;
  /**
   * sdkType이 asset일 경우 sdk 파일 경로입력
   */
  path?: string;
}

export enum KakaoSdkType { cdn, asset }
