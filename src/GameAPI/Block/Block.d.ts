/// <reference path="../../index.d.ts" />

/**
 * ### ð¦ æ¹åå¯¹è±¡
 *
 * å¨LLSEä¸­ï¼ä½¿ç¨ãæ¹åå¯¹è±¡ãæ¥æä½åè·åæä¸ç±»æ¹åçç¸å³ä¿¡æ¯
 *
 * è¯¥ç±»**æ²¡ææé å½æ°**ï¼è¯·éè¿å¶ä»æ¹å¼è·å¾ç±»å¯¹è±¡
 *
 * **æ³¨æ**ï¼ä¸è¦**é¿æä¿å­**ä¸ä¸ªæ¹åå¯¹è±¡\
 * å½æ¹åå¯¹è±¡å¯¹åºçæ¹åè¢«éæ¯æ¶ï¼å¯¹åºçæ¹åå¯¹è±¡å°åå¾æ æã\
 * å æ­¤ï¼å¦ææé¿ææä½æä¸ªæ¹åçéè¦ï¼è¯·éè¿**äºä»¶æä¾çåæ°**æè**ä½¿ç¨**{@linkcode mc.getBlock()}è·åå®æ¶çæ¹åå¯¹è±¡
 *
 * @see [ð¦ æ¹åå¯¹è±¡](https://docs.litebds.com/zh-Hans/#/LLSEPluginDevelopment/GameAPI/Block)
 */
declare class Block {
  /** æ¸¸æåæ¾ç¤ºçæ¹ååç§°ï¼ä¾ï¼`Stone`ï¼ */
  readonly name: string;

  /** æ¹åæ åç±»ååï¼ä¾ï¼`minecraft:stone`ï¼ */
  readonly type: string;

  /** æ¹åçæ¸¸æåid */
  readonly id: number;

  /** æ¹åæå¨åæ  */
  readonly pos: IntPos;

  /** æ¹åæ°æ®å¼ */
  readonly tileData: number;

  /** The block variant */
  readonly variant: number;

  /** æ¹åéæåº¦ */
  readonly translucency: number;

  /** æ¹åååº¦ */
  readonly thickness: number;

  /** æ¹åæ¯å¦ä¸ºç©ºæ° */
  readonly isAir: boolean;

  /** æ¯å¦ä¸ºå¯å¼¹è·³æ¹å */
  readonly isBounceBlock: boolean;

  /** æ¯å¦ä¸ºæé®æ¹å */
  readonly isButtonBlock: boolean;

  /** æ¯å¦ä¸ºåä½ç©æ¹å */
  readonly isCropBlock: boolean;

  /** æ¯å¦ä¸ºé¨æ¹å */
  readonly isDoorBlock: boolean;

  /** æ¯å¦ä¸ºæ æ æ¹å */
  readonly isFenceBlock: boolean;

  /** æ¯å¦ä¸ºæ æ é¨æ¹å */
  readonly isFenceGateBlock: boolean;

  /** æ¯å¦ä¸ºç»æ æ æ¹å */
  readonly isThinFenceBlock: boolean;

  /** æ¯å¦ä¸ºéçæ¹å */
  readonly isHeavyBlock: boolean;

  /** æ¯å¦ä¸ºå¹²æ¹å */
  readonly isStemBlock: boolean;

  /** æ¯å¦ä¸ºåç æ¹å */
  readonly isSlabBlock: boolean;

  /** æ¹åæ¯å¦ä¸ºä¸å¯ç ´å */
  readonly isUnbreakable: boolean;

  /** æ¹åæ¯å¦å¯é»æ¡æ°´ */
  readonly isWaterBlockingBlock: boolean;

  /**
   * ### ç ´åæ¹å
   *
   * @param drop æ¯å¦çææè½ç©
   * @returns æ¯å¦æåç ´å
   */
  destroy(drop: boolean): boolean;

  /**
   * ### è·åæ¹åå¯¹åºçNBTå¯¹è±¡
   *
   * å³äºNBTå¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [NBTæ¥å£ææ¡£](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)
   *
   * @returns æ¹åçNBTå¯¹è±¡
   */
  getNbt(): NbtCompound;

  /**
   * @deprecated
   * @alias {@linkcode getNbt()}
   */
  getTag(): NbtCompound;

  /**
   * ### åå¥æ¹åå¯¹åºçNBTå¯¹è±¡
   *
   * å³äºNBTå¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [NBTæ¥å£ææ¡£](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)
   *
   * æ³¨æï¼æéä½¿ç¨æ­¤apiï¼è¯·èèä½¿ç¨ {@linkcode mc.setBlock()} ä»£æ¿
   *
   * @param nbt NBTå¯¹è±¡
   *
   * @returns æ¯å¦æååå¥
   */
  setNbt(nbt: NbtCompound): boolean;

  /**
   * @deprecated
   * @alias {@linkcode setNbt()}
   */
  setTag(nbt: NbtCompound): boolean;

  /**
   * ### è·åæ¹åçBlockState
   *
   * æ¹ä¾¿å½æ°ï¼åå©è§£ææ¹åBlockStateå¹¶è½¬æ¢ä¸º`Object`ï¼æ¹ä¾¿è¯»åä¸è§£æ
   *
   * ç­ä»·äºèæ¬æ§è¡`block.getNbt().getTag("states").toObject()`
   *
   * å³äºNBTå¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [NBTæ¥å£ææ¡£](https://docs.litebds.com/#/zh_CN/Development/NbtAPI/NBT)
   *
   * @returns æ¹åçBlockState
   */
  getBlockState(): object;

  /**
   * ### å¤æ­æ¹åæ¯å¦æ¥æå®¹å¨
   *
   * å¦ç®±å­ãæ¡¶ç­å®¹å¨ï¼ä»ä»¬åèªæ¥æä¸ä¸ªå±äºèªå·±çå®¹å¨å¯¹è±¡
   *
   * å³äºå®¹å¨å¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [å®¹å¨å¯¹è±¡ APIææ¡£](https://docs.litebds.com/#/zh_CN/Development/GameAPI/Container)
   *
   * @returns è¿ä¸ªæ¹åæ¯å¦æ¥æå®¹å¨
   */
  hasContainer(): boolean;

  /**
   * ### è·åæ¹åææ¥æçå®¹å¨å¯¹è±¡
   *
   * å¦ç®±å­ãæ¡¶ç­å®¹å¨ï¼ä»ä»¬åèªæ¥æä¸ä¸ªå±äºèªå·±çå®¹å¨å¯¹è±¡
   *
   * å³äºå®¹å¨å¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [å®¹å¨å¯¹è±¡ APIææ¡£](https://docs.litebds.com/#/zh_CN/Development/GameAPI/Container)
   *
   * @returns è¿ä¸ªæ¹åææ¥æçå®¹å¨å¯¹è±¡
   */
  getContainer(): Container;

  /**
   * ### å¤æ­æ¹åæ¯å¦æ¥ææ¹åå®ä½
   *
   * å³äºæ¹åå®ä½å¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [æ¹åå®ä½å¯¹è±¡ APIææ¡£](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)
   *
   * @returns è¿ä¸ªæ¹åæ¯å¦æ¥ææ¹åå®ä½
   */
  hasBlockEntity(): boolean;

  /**
   * ### è·åæ¹åææ¥æçæ¹åå®ä½
   *
   * å³äºæ¹åå®ä½å¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [æ¹åå®ä½å¯¹è±¡ APIææ¡£](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)
   *
   * @returns è¿ä¸ªæ¹åææ¥æçæ¹åå®ä½
   */
  getBlockEntity(): BlockEntity;

  /**
   * ### å é¤æ¹åææ¥æçæ¹åå®ä½
   *
   * å³äºæ¹åå®ä½å¯¹è±¡çæ´å¤ä½¿ç¨ï¼è¯·åè [æ¹åå®ä½å¯¹è±¡ APIææ¡£](https://docs.litebds.com/#/zh_CN/Development/GameAPI/BlockEntity)
   *
   * @returns æ¯å¦æåå é¤
   */
  removeBlockEntity(): boolean;

  asPointer(): NativePointer;
}


declare class LLSE_Block extends Block{}