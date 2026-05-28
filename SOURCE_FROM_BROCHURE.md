# 真实产品数据（来源：客户提供的 Jiebo 公司宣传册 PDF, 2026-05-12）

**重要**：当前 `src/data/innovate-t5.ts` 中的规格是占位/编造，**必须按本文件覆盖**。

## 公司信息修正

| 字段 | 旧（错误） | 新（真实） |
|---|---|---|
| 网站 | spectryeep.com | jiebo-instrument.com（spectryeep.com 应作为另一域名指向） |
| 头部 Office 地址 | Wuxi, China | No.26-9, Huibei Road, Liangxi District, Wuxi, Jiangsu, China |
| 工厂地址 | (无) | No.40, Baishijian Road, Langxi Development Area, Xuancheng, Anhui, China |
| Tel | +86 181 1891 5623 | +86-510-83211967 / +86-510-83211953 |
| Email | lab-instrument@wxjiebo.cc | sophia@wxjiebo.cc |
| Skype | jiebotech | jiebotech |

## 真实产品线（10 款，原有 5 款全部需要更新）

### OES 光谱仪类

#### 1. Exquis T4 Optical Emission Spectrometer（之前 slug: t4-mini-spark，改名）
- Matrix: Fe, Al, Cu, Zn
- 50+ elements
- Optical System: Paschen-Runge mounting
- Grating Focal Length: **401mm**（非 750mm）
- Wavelength Range: **160-580nm**
- Operating Power: AC220V/50Hz
- Operating Temp/Humidity: 10-30°C / 20-80%RH
- Dimension/Weight: **L525×W635×H290mm, 33kg**
- 特色：sealed-cycle optical chamber（密封式氩气光室）、低噪 CMOS detector、UV 区高灵敏度

#### 2. Innovate T5 OES Spectrometer ✅ slug 不变
- Matrix: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb（10 种，**不是 22**）
- Optical System: Paschen-Runge mounting
- Grating Focal Length: **401mm**（**我写错为 750mm，必须改**）
- Wavelength Range: **140-680nm**（**我写错为 170-500nm**）
- Operating Power: AC220V/50Hz
- Operating Temp/Humidity: 10-30°C / 20-80%RH
- Dimension/Weight: **L590×W790×H350mm, 78kg**（**我写错为 180kg**）
- 特色：vacuum optical chamber（真空光室）+ all-digital excitation light source + Hamamatsu CMOS

#### 3. Noble T7 OES Spectrometer ✅ slug 不变
- Matrix: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb
- Optical System: Paschen-Runge mounting
- Grating Focal Length: 401mm
- Wavelength Range: 120-800nm（更宽于 T5）
- Operating Power: AC220V/50Hz
- Operating Temp/Humidity: 10-30°C / 20-80%RH
- Dimension/Weight: L610×W740×H1140mm, 160kg
- 特色：scientific-research grade CMOS、accuracy <10ppm、constant-temp chamber ±0.1°C

#### 4. JB-750 OES Spectrometer（新增，之前未收录）
- Matrix: Fe, Al, Cu, Mg, Zn, Ni, Co, Ti, Sn, Pb
- Optical System: Paschen-Runge mounting
- Grating Focal Length: **750mm**（这才是 750mm 焦距的型号）
- Wavelength Range: 120-800nm
- Operating Power: AC220V/50Hz
- Dimension/Weight: L750×W1140×H920mm, **256kg**（最大最重）
- 特色：PMT + vacuum chamber、single-spark pulse integral analysis、高端型号、50 年成熟光谱技术

#### 5. Surpass F1 Mobile OES Spectrometer（新增，便携车载式）
- Optical System: Paschen-Runge mounting
- Focal Length: UV 350mm 2400 lines/mm + Visible 401mm 2400 lines/mm
- Chromatic Dispersion: 0.7nm/mm
- Wavelength Range: 160-425nm
- UV Analysis: C, P, S, B, As, Sn, Se, N
- OS: Win 7/8/10/11
- Argon Requirement: purity > 99.999%
- Power: 110/230V 50/60Hz
- Dimension/Weight: L400×W280×H600mm, 45kg(含电池)
- 特色：built-in 锂电池 + 氩气瓶、可推车移动、jet electrode、600 次连续测试

### 碳硫分析仪类

#### 6. CS2020 High-frequency Infrared Carbon & Sulfur Analyzer（新增）
- Detection Range: Low C 0.00001%~0.5% / High C 0.1%~99.99%; Low S 0.00001%~0.5% / High S 0.1%~99.99%
- 4 个 physical detection cells
- Analytical Precision: C 0.001mg(1ppm) 或 0.5% RSD；S 0.001mg(1ppm) 或 0.5% RSD
- Sensitivity: C 0.00001% / S 0.00001%
- Analyzing Time: 20-60 seconds adjustable
- Power Source: AC220V/50Hz
- Dimension/Weight: L600×W645×H830mm, 110kg
- 特色：自动双刷清洁 + 真空除尘、200+ 周期免维护、改良红外池技术

#### 7. CS995 Carbon Sulfur Analyzer ✅ slug 不变（修正规格）
- 形态：**Bench type** 台式（detector + high-frequency 炉分离设计）
- Scope: C 0.0005%-6.0000% / S 0.0005%-0.3500%
- Furnace Power: 2.2 KW
- Detection Cell: 1 carbon + 1 sulfur pool
- Dimensions: L530×W370×H195mm
- Weight: 115kg

#### 8. CS996 Carbon Sulfur Analyzer ✅ slug 不变（修正规格）
- 形态：**Floor / operating table 立式**
- Scope: C 0.0001%-10.0000% / S 0.0001%-2.0000%（比 CS995 范围大）
- Furnace Power: 2.5 KW
- Detection Cell: 1 carbon + 1 sulfur pool（可扩展低碳/高硫池）
- Dimensions: L1360×W610×H770mm 和 L680×W510×H1260mm
- Weight: 215kg

### 元素分析仪类

#### 9. ONH-508 Oxygen, Nitrogen and Hydrogen Analyzer（新增）
- Measuring Range: O 0.5ppm~20% / N 0.5ppm~50% / H 0.2ppm~0.1%
- Accuracy: O 1ppm 或 RSD≤1.0% / N 1ppm 或 RSD≤1.0% / H 0.2ppm 或 RSD≤2.0%
- Minimum Reading: 0.01ppm
- Analysis Time: 120-240s
- Test Methods: O 非色散红外 / N 热导 / H 非色散红外
- Balance Accuracy: 0.0001g
- Furnace: 220VAC, 8.5KVA max, 1500A max, 3000°C max
- Carrier gas: high-purity He 99.99% / Power gas: N2 或 净化压缩空气
- Dimension/Weight: L600×W700×H900mm, 160kg

### 手持式分析仪类

#### 10. F6000 Pro Handheld XRF Analyzer（新增）
- Excitation: High-power miniature X-ray tube 50KV/100mA/4W
- Detector: Si-Pin
- 元素：Ti 到 U
- 6 组滤光片自动切换
- 50°C 环境稳定工作
- WiFi/Bluetooth/USB3.0
- 6800mAh 锂电池, 8 小时续航
- 应用：金属回收、未知材料、石化、管道、不锈钢、贵金属、特殊合金

#### 11. F7000 Pro Handheld LIBS Analyzer（新增）
- Class 3B Laser
- 元素：Be, Mg, Al, Si, Ti, Cr, Mn, Fe, Ni, Cu, Zn, Cd, Sn, Pb, Bi, Mo, V, Nb, W
- 测试速度 <1 秒
- 包含电池 1.25kg
- 安全开关需贴附目标才出激光

## 出口国家清单（来自宣传册地图，已确认目标市场）
Mexico, Canada, Peru, Ecuador, Bolivia, Argentina, Chile, Brazil, Spain, Latvia, North Macedonia, Ukraine, Côte d'Ivoire, Nigeria, Algeria, Tunisia, Saudi Arabia, Iraq, Iran, South Africa, Zimbabwe, Chad, Sudan, Egypt, Kenya, Ethiopia, Uzbekistan, Kazakhstan, Kyrgyzstan, Afghanistan, Pakistan, India, Bangladesh, Myanmar, Vietnam, Mongolia, Russia, New Zealand, Australia, Madagascar

**验证语言选择正确**：俄罗斯/独联体（RU）、拉美（ES）、中东+北非（AR）、英语全球 ✓

## 公司描述（来自宣传册原文，可用作 About 页面）

> Wuxi Jiebo Instrument Technology Co.,Ltd. is located in the city of Wuxi, Jiangsu Province, China. For many years, we engaged in the production, sales and customer service of chemical analysis instruments and related products. We not only have the advantages of scale of products and personalized service but also have the advantages in the process of technological innovation. The market share has been ranked counterparts and equipment exported to the Middle East, Africa, Southeast Asia, West Asia, Eastern Europe, South America and other countries.

> Our products are mainly for the elements analysis in the metals and other materials. The main products are spark optical emission spectrometer, high-frequency infrared carbon sulfur analyzer and x-ray fluorescence analyzer. The products combine the advantages of similar foreign products and upgrade the design and innovation. Our products are in a leading position in the domestic industry and win the trust and praise from thousands of users.

> Headquarters is located in Wuxi Jinshan North Photoelectric New Material Industrial Park.
> Innovation is the life of enterprise.
> Business philosophy: "International Quality, Domestic Price, Personal Service"

## 下回合执行计划（按此修正）

1. **改 src/consts.ts**：email → sophia@wxjiebo.cc; 加 headOffice + factory 字段
2. **改 src/data/innovate-t5.ts**：焦距 401mm、波长 140-680nm、矩阵 10 种、78kg
3. **重命名 slug**：`t4-mini-spark` → `exquis-t4`，写真实规格
4. **新增 4 个产品**：JB-750（OES 旗舰）、Surpass F1（移动 OES）、CS2020（C/S）、ONH-508（O/N/H）、F6000 Pro（XRF）、F7000 Pro（LIBS）—— 实际是 6 个新增
5. **产品分类页**改成 3 大类：OES 光谱仪（5 款）/ 元素分析仪（C/S, O/N/H 共 3 款）/ 手持式（XRF, LIBS 共 2 款）
6. **About 页面**：直接用宣传册原文 + 工厂图
7. **更新 schema.org Organization**：地址改真实地址；加 sameAs jiebo-instrument.com
8. **更新 llms.txt**：所有新产品 + 真实规格
