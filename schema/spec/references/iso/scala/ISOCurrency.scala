/*
 * Copyright 2017 Vitor S. Vieira
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.vitorsvieira.iso

import com.vitorsvieira.iso.ISOCountry.ISOCountry

/**
 * ISO 4217 is the International Standard for currency codes.
 * The most recent edition is ISO 4217:2015 updated in January/2017.
 * Up-to-date list can be found for free on the
 * <a href="http://www.iso.org/iso/home/standards/currency_codes.htm">
 *   International Organization for Standardization website</a>.
 *
 * @see <a href="http://www.iso.org/iso/home/standards/currency_codes.htm">
 *        http://www.iso.org/iso/home/standards/currency_codes.htm</a>
 */
object ISOCurrency extends Enum {
  sealed class EnumVal(
    val value:         String,
    val numericalCode: Int,
    val minorUnit:     Int,
    val countries:     ISOCountry*
  ) extends Value

  type ISOCurrency = EnumVal
  // format: OFF
  val ADB_UNIT_OF_ACCOUNT = new ISOCurrency("XUA", 965, 0)
  val AFGHANI             = new ISOCurrency("AFN", 971, 2, ISOCountry.AFGHANISTAN)
  val ALGERIAN_DINAR      = new ISOCurrency("DZD", 12, 2, ISOCountry.ALGERIA)
  val ARGENTINE_PESO      = new ISOCurrency("ARS", 32, 2, ISOCountry.ARGENTINA)
  val ARMENIAN_DRAM       = new ISOCurrency("AMD", 51, 2, ISOCountry.ARMENIA)
  val ARUBAN_FLORIN       = new ISOCurrency("AWG", 533, 2, ISOCountry.ARUBA)
  val AUSTRALIAN_DOLLAR   = new ISOCurrency(
    "AUD",
    36,
    2,
    ISOCountry.HEARD_ISLAND_AND_MCDONALD_ISLANDS,
    ISOCountry.TUVALU,
    ISOCountry.KIRIBATI,
    ISOCountry.AUSTRALIA,
    ISOCountry.NORFOLK_ISLAND,
    ISOCountry.NAURU,
    ISOCountry.CHRISTMAS_ISLAND,
    ISOCountry.COCOS_ISLANDS
  )
  val AZERBAIJANIAN_MANAT   = new ISOCurrency("AZN", 944, 2, ISOCountry.AZERBAIJAN)
  val BAHAMIAN_DOLLAR       = new ISOCurrency("BSD", 44, 2, ISOCountry.BAHAMAS)
  val BAHRAINI_DINAR        = new ISOCurrency("BHD", 48, 3, ISOCountry.BAHRAIN)
  val BAHT                  = new ISOCurrency("THB", 764, 2, ISOCountry.THAILAND)
  val BALBOA                = new ISOCurrency("PAB", 590, 2, ISOCountry.PANAMA)
  val BARBADOS_DOLLAR       = new ISOCurrency("BBD", 52, 2, ISOCountry.BARBADOS)
  val BELARUSSIAN_RUBLE     = new ISOCurrency("BYR", 974, 0, ISOCountry.BELARUS)
  val BELIZE_DOLLAR         = new ISOCurrency("BZD", 84, 2, ISOCountry.BELIZE)
  val BERMUDIAN_DOLLAR      = new ISOCurrency("BMD", 60, 2, ISOCountry.BERMUDA)
  val BOLIVAR               = new ISOCurrency("VEF", 937, 2, ISOCountry.VENEZUELA)
  val BOLIVIANO             = new ISOCurrency("BOB", 68, 2, ISOCountry.BOLIVIA)
  val BRAZILIAN_REAL        = new ISOCurrency("BRL", 986, 2, ISOCountry.BRAZIL)
  val BRUNEI_DOLLAR         = new ISOCurrency("BND", 96, 2, ISOCountry.BRUNEI_DARUSSALAM)
  val BULGARIAN_LEV         = new ISOCurrency("BGN", 975, 2, ISOCountry.BULGARIA)
  val BURUNDI_FRANC         = new ISOCurrency("BIF", 108, 0, ISOCountry.BURUNDI)
  val CANADIAN_DOLLAR       = new ISOCurrency("CAD", 124, 2, ISOCountry.CANADA)
  val CAPE_VERDE_ESCUDO     = new ISOCurrency("CVE", 132, 2, ISOCountry.CAPE_VERDE)
  val CAYMAN_ISLANDS_DOLLAR = new ISOCurrency("KYD", 136, 2, ISOCountry.CAYMAN_ISLANDS)
  val CFA_FRANC_BCEAO       = new ISOCurrency(
    "XOF",
    952,
    0,
    ISOCountry.MALI,
    ISOCountry.NIGER,
    ISOCountry.BENIN,
    ISOCountry.TOGO,
    ISOCountry.BURKINA_FASO,
    ISOCountry.SENEGAL,
    ISOCountry.COTE_D_IVOIRE,
    ISOCountry.GUINEA_BISSAU
  )
  val CFA_FRANC_BEAC = new ISOCurrency(
    "XAF", 950, 0,
    ISOCountry.CHAD,
    ISOCountry.GABON,
    ISOCountry.EQUATORIAL_GUINEA,
    ISOCountry.CAMEROON,
    ISOCountry.CENTRAL_AFRICAN_REPUBLIC,
    ISOCountry.CONGO
  )
  val CFP_FRANC = new ISOCurrency(
    "XPF",
    953,
    0,
    ISOCountry.FRENCH_POLYNESIA,
    ISOCountry.WALLIS_AND_FUTUNA,
    ISOCountry.NEW_CALEDONIA
  )
  val CHILEAN_PESO      = new ISOCurrency("CLP", 152, 0, ISOCountry.CHILE)
  val COLOMBIAN_PESO    = new ISOCurrency("COP", 170, 2, ISOCountry.COLOMBIA)
  val COMORO_FRANC      = new ISOCurrency("KMF", 174, 0, ISOCountry.COMOROS)
  val CONGOLESE_FRANC   = new ISOCurrency("CDF", 976, 2, ISOCountry.CONGO)
  val CONVERTIBLE_MARK  = new ISOCurrency("BAM", 977, 2, ISOCountry.BOSNIA_AND_HERZEGOVINA)
  val CORDOBA_ORO       = new ISOCurrency("NIO", 558, 2, ISOCountry.NICARAGUA)
  val COSTA_RICAN_COLON = new ISOCurrency("CRC", 188, 2, ISOCountry.COSTA_RICA)
  val CROATIAN_KUNA     = new ISOCurrency("HRK", 191, 2, ISOCountry.CROATIA)
  val CUBAN_PESO        = new ISOCurrency("CUP", 192, 2, ISOCountry.CUBA)
  val CZECH_KORUNA      = new ISOCurrency("CZK", 203, 2, ISOCountry.CZECH_REPUBLIC)
  val DALASI            = new ISOCurrency("GMD", 270, 2, ISOCountry.GAMBIA)
  val DANISH_KRONE      = new ISOCurrency(
    "DKK",
    208,
    2,
    ISOCountry.DENMARK,
    ISOCountry.FAROE_ISLANDS,
    ISOCountry.GREENLAND
  )
  val DENAR                 = new ISOCurrency("MKD", 807, 2, ISOCountry.MACEDONIA)
  val DJIBOUTI_FRANC        = new ISOCurrency("DJF", 262, 0, ISOCountry.DJIBOUTI)
  val DOBRA                 = new ISOCurrency("STD", 678, 2, ISOCountry.SAO_TOME_AND_PRINCIPE)
  val DOMINICAN_PESO        = new ISOCurrency("DOP", 214, 2, ISOCountry.DOMINICAN_REPUBLIC)
  val DONG                  = new ISOCurrency("VND", 704, 0, ISOCountry.VIET_NAM)
  val EAST_CARIBBEAN_DOLLAR = new ISOCurrency(
    "XCD",
    951,
    2,
    ISOCountry.DOMINICA,
    ISOCountry.SAINT_VINCENT_AND_THE_GRENADINES,
    ISOCountry.MONTSERRAT,
    ISOCountry.ANTIGUA_AND_BARBUDA,
    ISOCountry.SAINT_LUCIA,
    ISOCountry.ANGUILLA,
    ISOCountry.SAINT_KITTS_AND_NEVIS,
    ISOCountry.GRENADA
  )
  val EGYPTIAN_POUND    = new ISOCurrency("EGP", 818, 2, ISOCountry.EGYPT)
  val EL_SALVADOR_COLON = new ISOCurrency("SVC", 222, 2, ISOCountry.EL_SALVADOR)
  val EMU_6             = new ISOCurrency("XBB", 956, 0)
  val ETHIOPIAN_BIRR    = new ISOCurrency("ETB", 230, 2, ISOCountry.ETHIOPIA)
  val EUA_17            = new ISOCurrency("XBD", 958, 0)
  val EUA_9             = new ISOCurrency("XBC", 957, 0)
  val EURCO             = new ISOCurrency("XBA", 955, 0)
  val EURO              = new ISOCurrency(
    "EUR",
    978,
    2,
    ISOCountry.ALAND_ISLANDS,
    ISOCountry.ANDORRA,
    ISOCountry.AUSTRIA,
    ISOCountry.BELGIUM,
    ISOCountry.CYPRUS,
    ISOCountry.ESTONIA,
    ISOCountry.FINLAND,
    ISOCountry.FRANCE,
    ISOCountry.FRENCH_GUIANA,
    ISOCountry.FRENCH_SOUTHERN_TERRITORIES,
    ISOCountry.GERMANY,
    ISOCountry.GREECE,
    ISOCountry.GUADELOUPE,
    ISOCountry.IRELAND,
    ISOCountry.ITALY,
    ISOCountry.LATVIA,
    ISOCountry.LITHUANIA,
    ISOCountry.LUXEMBOURG,
    ISOCountry.MALTA,
    ISOCountry.MARTINIQUE,
    ISOCountry.MAYOTTE,
    ISOCountry.MONACO,
    ISOCountry.MONTENEGRO,
    ISOCountry.NETHERLANDS,
    ISOCountry.PORTUGAL,
    ISOCountry.REUNION,
    ISOCountry.SAINT_BARTHELEMY,
    ISOCountry.SAINT_MARTIN,
    ISOCountry.SAINT_PIERRE_AND_MIQUELON,
    ISOCountry.SAN_MARINO,
    ISOCountry.SLOVAKIA,
    ISOCountry.SLOVENIA,
    ISOCountry.SPAIN,
    ISOCountry.VATICAN_CITY_STATE
  )
  val FALKLAND_ISLANDS_POUND = new ISOCurrency("FKP", 238, 2, ISOCountry.FALKLAND_ISLANDS)
  val FIJI_DOLLAR            = new ISOCurrency("FJD", 242, 2, ISOCountry.FIJI)
  val FORINT                 = new ISOCurrency("HUF", 348, 2, ISOCountry.HUNGARY)
  val GHANA_CEDI             = new ISOCurrency("GHS", 936, 2, ISOCountry.GHANA)
  val GIBRALTAR_POUND        = new ISOCurrency("GIP", 292, 2, ISOCountry.GIBRALTAR)
  val GOLD                   = new ISOCurrency("XAU", 959, 0)
  val GOURDE                 = new ISOCurrency("HTG", 332, 2, ISOCountry.HAITI)
  val GUARANI                = new ISOCurrency("PYG", 600, 0, ISOCountry.PARAGUAY)
  val GUINEA_FRANC           = new ISOCurrency("GNF", 324, 0, ISOCountry.GUINEA)
  val GUYANA_DOLLAR          = new ISOCurrency("GYD", 328, 2, ISOCountry.GUYANA)
  val HONG_KONG_DOLLAR       = new ISOCurrency("HKD", 344, 2, ISOCountry.HONG_KONG)
  val HRYVNIA                = new ISOCurrency("UAH", 980, 2, ISOCountry.UKRAINE)
  val ICELAND_KRONA          = new ISOCurrency("ISK", 352, 0, ISOCountry.ICELAND)
  val INDIAN_RUPEE           = new ISOCurrency(
    "INR",
    356,
    2,
    ISOCountry.INDIA,
    ISOCountry.BHUTAN
  )
  val IRANIAN_RIAL                = new ISOCurrency("IRR", 364, 2, ISOCountry.IRAN)
  val IRAQI_DINAR                 = new ISOCurrency("IQD", 368, 3, ISOCountry.IRAQ)
  val JAMAICAN_DOLLAR             = new ISOCurrency("JMD", 388, 2, ISOCountry.JAMAICA)
  val JORDANIAN_DINAR             = new ISOCurrency("JOD", 400, 3, ISOCountry.JORDAN)
  val KENYAN_SHILLING             = new ISOCurrency("KES", 404, 2, ISOCountry.KENYA)
  val KINA                        = new ISOCurrency("PGK", 598, 2, ISOCountry.PAPUA_NEW_GUINEA)
  val KIP                         = new ISOCurrency("LAK", 418, 2, ISOCountry.LAO_PEOPLES_DEMOCRATIC_REPUBLIC)
  val KUWAITI_DINAR               = new ISOCurrency("KWD", 414, 3, ISOCountry.KUWAIT)
  val KWACHA                      = new ISOCurrency("MWK", 454, 2, ISOCountry.MALAWI)
  val KWANZA                      = new ISOCurrency("AOA", 973, 2, ISOCountry.ANGOLA)
  val KYAT                        = new ISOCurrency("MMK", 104, 2, ISOCountry.MYANMAR)
  val LARI                        = new ISOCurrency("GEL", 981, 2, ISOCountry.GEORGIA)
  val LEBANESE_POUND              = new ISOCurrency("LBP", 422, 2, ISOCountry.LEBANON)
  val LEK                         = new ISOCurrency("ALL", 8, 2, ISOCountry.ALBANIA)
  val LEMPIRA                     = new ISOCurrency("HNL", 340, 2, ISOCountry.HONDURAS)
  val LEONE                       = new ISOCurrency("SLL", 694, 2, ISOCountry.SIERRA_LEONE)
  val LIBERIAN_DOLLAR             = new ISOCurrency("LRD", 430, 2, ISOCountry.LIBERIA)
  val LIBYAN_DINAR                = new ISOCurrency("LYD", 434, 3, ISOCountry.LIBYA)
  val LILANGENI                   = new ISOCurrency("SZL", 748, 2, ISOCountry.SWAZILAND)
  val LOTI                        = new ISOCurrency("LSL", 426, 2, ISOCountry.LESOTHO)
  val MALAGASY_ARIARY             = new ISOCurrency("MGA", 969, 2, ISOCountry.MADAGASCAR)
  val MALAYSIAN_RINGGIT           = new ISOCurrency("MYR", 458, 2, ISOCountry.MALAYSIA)
  val MAURITIUS_RUPEE             = new ISOCurrency("MUR", 480, 2, ISOCountry.MAURITIUS)
  val MEXICAN_PESO                = new ISOCurrency("MXN", 484, 2, ISOCountry.MEXICO)
  val MEXICAN_UNIDAD_DE_INVERSION = new ISOCurrency("MXV", 979, 2, ISOCountry.MEXICO)
  val MOLDOVAN_LEU                = new ISOCurrency("MDL", 498, 2, ISOCountry.MOLDOVA)
  val MOROCCAN_DIRHAM             = new ISOCurrency(
    "MAD",
    504,
    2,
    ISOCountry.WESTERN_SAHARA,
    ISOCountry.MOROCCO
  )
  val MOZAMBIQUE_METICAL            = new ISOCurrency("MZN", 943, 2, ISOCountry.MOZAMBIQUE)
  val MVDOL                         = new ISOCurrency("BOV", 984, 2, ISOCountry.BOLIVIA)
  val NAIRA                         = new ISOCurrency("NGN", 566, 2, ISOCountry.NIGERIA)
  val NAKFA                         = new ISOCurrency("ERN", 232, 2, ISOCountry.ERITREA)
  val NAMIBIA_DOLLAR                = new ISOCurrency("NAD", 516, 2, ISOCountry.NAMIBIA)
  val NEPALESE_RUPEE                = new ISOCurrency("NPR", 524, 2, ISOCountry.NEPAL)
  val NETHERLANDS_ANTILLEAN_GUILDER = new ISOCurrency(
    "ANG",
    532,
    2,
    ISOCountry.SINT_MAARTEN,
    ISOCountry.CURACAO
  )
  val NEW_ISRAELI_SHEQEL = new ISOCurrency("ILS", 376, 2, ISOCountry.ISRAEL)
  val NEW_TAIWAN_DOLLAR  = new ISOCurrency("TWD", 901, 2, ISOCountry.TAIWAN)
  val NEW_ZEALAND_DOLLAR = new ISOCurrency(
    "NZD",
    554,
    2,
    ISOCountry.TOKELAU,
    ISOCountry.NEW_ZEALAND,
    ISOCountry.COOK_ISLANDS,
    ISOCountry.NIUE,
    ISOCountry.PITCAIRN
  )
  val NGULTRUM              = new ISOCurrency("BTN", 64, 2, ISOCountry.BHUTAN)
  val NO_UNIVERSAL_CURRENCY = new ISOCurrency("",
    0,
    0,
    ISOCountry.PALESTINE,
    ISOCountry.ANTARCTICA,
    ISOCountry.SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS
  )
  val NORTH_KOREAN_WON = new ISOCurrency("KPW", 408, 2, ISOCountry.NORTH_KOREA)
  val NORWEGIAN_KRONE  = new ISOCurrency(
    "NOK",
    578,
    2,
    ISOCountry.NORWAY,
    ISOCountry.SVALBARD_AND_JAN_MAYEN,
    ISOCountry.BOUVET_ISLAND
  )
  val SOL              = new ISOCurrency("PEN", 604, 2, ISOCountry.PERU)
  val NO_CURRENCY      = new ISOCurrency("XXX", 999, 0)
  val OUGUIYA          = new ISOCurrency("MRO", 478, 2, ISOCountry.MAURITANIA)
  val PAKISTAN_RUPEE   = new ISOCurrency("PKR", 586, 2, ISOCountry.PAKISTAN)
  val PALLADIUM        = new ISOCurrency("XPD", 964, 0)
  val PATACA           = new ISOCurrency("MOP", 446, 2, ISOCountry.MACAO)
  val PAANGA           = new ISOCurrency("TOP", 776, 2, ISOCountry.TONGA)
  val PESO_CONVERTIBLE = new ISOCurrency("CUC", 931, 2, ISOCountry.CUBA)
  val PESO_URUGUAYO    = new ISOCurrency("UYU", 858, 2, ISOCountry.URUGUAY)
  val PHILIPPINE_PESO  = new ISOCurrency("PHP", 608, 2, ISOCountry.PHILIPPINES)
  val PLATINUM         = new ISOCurrency("XPT", 962, 0)
  val POUND_STERLING   = new ISOCurrency(
    "GBP", 826, 2,
    ISOCountry.UNITED_KINGDOM,
    ISOCountry.ISLE_OF_MAN,
    ISOCountry.JERSEY,
    ISOCountry.GUERNSEY
  )
  val PULA        = new ISOCurrency("BWP", 72, 2, ISOCountry.BOTSWANA)
  val QATARI_RIAL = new ISOCurrency("QAR", 634, 2, ISOCountry.QATAR)
  val QUETZAL     = new ISOCurrency("GTQ", 320, 2, ISOCountry.GUATEMALA)
  val RAND        = new ISOCurrency(
    "ZAR",
    710,
    2,
    ISOCountry.NAMIBIA,
    ISOCountry.LESOTHO,
    ISOCountry.SOUTH_AFRICA
  )
  val RIAL_OMANI             = new ISOCurrency("OMR", 512, 3, ISOCountry.OMAN)
  val RIEL                   = new ISOCurrency("KHR", 116, 2, ISOCountry.CAMBODIA)
  val ROMANIAN_LEU           = new ISOCurrency("RON", 946, 2, ISOCountry.ROMANIA)
  val RUFIYAA                = new ISOCurrency("MVR", 462, 2, ISOCountry.MALDIVES)
  val RUPIAH                 = new ISOCurrency("IDR", 360, 2, ISOCountry.INDONESIA)
  val RUSSIAN_RUBLE          = new ISOCurrency("RUB", 643, 2, ISOCountry.RUSSIAN_FEDERATION)
  val RWANDA_FRANC           = new ISOCurrency("RWF", 646, 0, ISOCountry.RWANDA)
  val SAINT_HELENA_POUND     = new ISOCurrency("SHP", 654, 2, ISOCountry.SAINT_HELENA)
  val SAUDI_RIYAL            = new ISOCurrency("SAR", 682, 2, ISOCountry.SAUDI_ARABIA)
  val SDR                    = new ISOCurrency("XDR", 960, 0)
  val SERBIAN_DINAR          = new ISOCurrency("RSD", 941, 2, ISOCountry.SERBIA)
  val SEYCHELLES_RUPEE       = new ISOCurrency("SCR", 690, 2, ISOCountry.SEYCHELLES)
  val SILVER                 = new ISOCurrency("XAG", 961, 0)
  val SINGAPORE_DOLLAR       = new ISOCurrency("SGD", 702, 2, ISOCountry.SINGAPORE)
  val SOLOMON_ISLANDS_DOLLAR = new ISOCurrency("SBD", 90, 2, ISOCountry.SOLOMON_ISLANDS)
  val SOM                    = new ISOCurrency("KGS", 417, 2, ISOCountry.KYRGYZSTAN)
  val SOMALI_SHILLING        = new ISOCurrency("SOS", 706, 2, ISOCountry.SOMALIA)
  val SOMONI                 = new ISOCurrency("TJS", 972, 2, ISOCountry.TAJIKISTAN)
  val SOUTH_SUDANESE_POUND   = new ISOCurrency("SSP", 728, 2, ISOCountry.SOUTH_SUDAN)
  val SRI_LANKA_RUPEE        = new ISOCurrency("LKR", 144, 2, ISOCountry.SRI_LANKA)
  val SUCRE                  = new ISOCurrency("XSU", 994, 0)
  val SUDANESE_POUND         = new ISOCurrency("SDG", 938, 2, ISOCountry.SUDAN)
  val SURINAM_DOLLAR         = new ISOCurrency("SRD", 968, 2, ISOCountry.SURINAME)
  val SWEDISH_KRONA          = new ISOCurrency("SEK", 752, 2, ISOCountry.SWEDEN)
  val SWISS_FRANC            = new ISOCurrency(
    "CHF",
    756,
    2,
    ISOCountry.LIECHTENSTEIN,
    ISOCountry.SWITZERLAND
  )
  val SYRIAN_POUND                       = new ISOCurrency("SYP", 760, 2, ISOCountry.SYRIAN_ARAB_REPUBLIC)
  val TAKA                               = new ISOCurrency("BDT", 50, 2, ISOCountry.BANGLADESH)
  val TALA                               = new ISOCurrency("WST", 882, 2, ISOCountry.SAMOA)
  val TANZANIAN_SHILLING                 = new ISOCurrency("TZS", 834, 2, ISOCountry.TANZANIA)
  val TENGE                              = new ISOCurrency("KZT", 398, 2, ISOCountry.KAZAKHSTAN)
  val TRINIDAD_AND_TOBAGO_DOLLAR         = new ISOCurrency("TTD", 780, 2, ISOCountry.TRINIDAD_AND_TOBAGO)
  val TUGRIK                             = new ISOCurrency("MNT", 496, 2, ISOCountry.MONGOLIA)
  val TUNISIAN_DINAR                     = new ISOCurrency("TND", 788, 3, ISOCountry.TUNISIA)
  val TURKISH_LIRA                       = new ISOCurrency("TRY", 949, 2, ISOCountry.TURKEY)
  val TURKMENISTAN_NEW_MANAT             = new ISOCurrency("TMT", 934, 2, ISOCountry.TURKMENISTAN)
  val TESTING_CODE                       = new ISOCurrency("XTS", 963, 0)
  val UAE_DIRHAM                         = new ISOCurrency("AED", 784, 2, ISOCountry.UNITED_ARAB_EMIRATES)
  val UGANDA_SHILLING                    = new ISOCurrency("UGX", 800, 0, ISOCountry.UGANDA)
  val UIC_FRANC                          = new ISOCurrency("XFU", 0, 0)
  val UNIDAD_DE_VALOR_REAL               = new ISOCurrency("COU", 970, 2, ISOCountry.COLOMBIA)
  val UNIDADES_DE_FOMENTO                = new ISOCurrency("CLF", 990, 0, ISOCountry.CHILE)
  val URUGUAY_PESO_EN_UNIDADES_INDEXADAS = new ISOCurrency("UYI", 940, 0, ISOCountry.URUGUAY)
  val US_DOLLAR                          = new ISOCurrency(
    "USD",
    840, 2,
    ISOCountry.BRITISH_VIRGIN_ISLANDS,
    ISOCountry.TIMOR_LESTE,
    ISOCountry.NORTHERN_MARIANA_ISLANDS,
    ISOCountry.MICRONESIA,
    ISOCountry.PALAU,
    ISOCountry.GUAM,
    ISOCountry.HAITI,
    ISOCountry.ECUADOR,
    ISOCountry.UNITED_STATES_MINOR_OUTLYING_ISLANDS,
    ISOCountry.BRITISH_INDIAN_OCEAN_TERRITORY,
    ISOCountry.US_VIRGIN_ISLANDS,
    ISOCountry.BONAIRE,
    ISOCountry.EL_SALVADOR,
    ISOCountry.UNITED_STATES,
    ISOCountry.PANAMA,
    ISOCountry.MARSHALL_ISLANDS,
    ISOCountry.PUERTO_RICO,
    ISOCountry.AMERICAN_SAMOA,
    ISOCountry.TURKS_AND_CAICOS_ISLANDS
  )
  val US_DOLLAR_NEXT_DAY = new ISOCurrency("USN", 997, 2, ISOCountry.UNITED_STATES)
  val US_DOLLAR_SAME_DAY = new ISOCurrency("USS", 998, 2, ISOCountry.UNITED_STATES)
  val UZBEKISTAN_SUM     = new ISOCurrency("UZS", 860, 2, ISOCountry.UZBEKISTAN)
  val VATU               = new ISOCurrency("VUV", 548, 0, ISOCountry.VANUATU)
  val WIR_EURO           = new ISOCurrency("CHE", 947, 2, ISOCountry.SWITZERLAND)
  val WIR_FRANC          = new ISOCurrency("CHW", 948, 2, ISOCountry.SWITZERLAND)
  val WON                = new ISOCurrency("KRW", 410, 0, ISOCountry.SOUTH_KOREA)
  val YEMENI_RIAL        = new ISOCurrency("YER", 886, 2, ISOCountry.YEMEN)
  val YEN                = new ISOCurrency("JPY", 392, 0, ISOCountry.JAPAN)
  val YUAN_RENMINBI      = new ISOCurrency("CNY", 156, 2, ISOCountry.CHINA)
  val ZAMBIAN_KWACHA     = new ISOCurrency("ZMW", 967, 2, ISOCountry.ZAMBIA)
  val ZIMBABWE_DOLLAR    = new ISOCurrency("ZWL", 932, 2, ISOCountry.ZIMBABWE)
  val ZLOTY              = new ISOCurrency("PLN", 985, 2, ISOCountry.POLAND)
  // format: ON

  /**
   * Retrieves ISOCurrency based on currency code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param currencyCode Currency code, ie. USD, CAD
   * @return CountryCallingCode
   */
  def apply(currencyCode: String): ISOCurrency =
    ISOCurrency.values.find(currencyCode == _.toString) match {
      case Some(currency) ⇒ currency
      case _              ⇒ throw new ParseException(s"Invalid currency code '$currencyCode' for ISOCurrency")
    }

  /**
   * Retrieves Option[ISOCurrency] based on currency code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param currencyCode Currency code, ie. USD, CAD
   * @return CountryCallingCode
   */
  def from(currencyCode: String): Option[ISOCurrency] =
    ISOCurrency.values.find(currencyCode == _.toString)

  /**
   * Retrieves ISOCurrency using ISOCountry.
   * https://www.iso.org/obp/ui/#search
   *
   * @param country ISOCountry.JAPAN, ISOCountry("US")
   * @return Option[CountryCallingCode]
   */
  def apply(country: ISOCountry): ISOCurrency =
    ISOCurrency.values.find(_.countries.contains(country)) match {
      case Some(currency) ⇒ currency
      case _              ⇒ throw new ParseException(s"Invalid country '$country' for ISOCurrency")
    }

  /**
   * Retrieves Option[ISOCurrency] using ISOCountry.
   * https://www.iso.org/obp/ui/#search
   *
   * @param country ISOCountry.JAPAN, ISOCountry("US")
   * @return Option[CountryCallingCode]
   */
  def from(country: ISOCountry): Option[ISOCurrency] =
    ISOCurrency.values.find(_.countries.contains(country))

  /**
   * Retrieves ISOCurrency using numerical code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericalCode ie. 840, 392
   * @return Option[CountryCallingCode]
   */
  def apply(numericalCode: Int): ISOCurrency =
    ISOCurrency.values.find(_.numericalCode == numericalCode) match {
      case Some(currency) ⇒ currency
      case _              ⇒ throw new ParseException(s"Invalid numeric code '$numericalCode' for ISOCurrency")
    }
  /**
   * Retrieves Option[ISOCurrency] using numerical code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericalCode ie. 840, 392
   * @return Option[CountryCallingCode]
   */
  def from(numericalCode: Int): Option[ISOCurrency] =
    ISOCurrency.values.find(_.numericalCode == numericalCode)
}
