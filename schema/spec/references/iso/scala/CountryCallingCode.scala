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
 * *
 * Country calling codes or country dial in codes are telephone dialing prefixes
 * for the member countries of the International Telecommunication Union (ITU).
 * They are defined by the ITU-T in standards E.123 and E.164.
 */
object CountryCallingCode extends Enum {

  sealed class EnumVal(
    val value:         String,
    val numericalCode: Int,
    val countries:     ISOCountry*
  ) extends Value

  type CountryCallingCode = EnumVal
  // format: OFF
  val `+1`     = new CountryCallingCode("1", 1, ISOCountry.UNITED_STATES, ISOCountry.CANADA)
  val `+1-340` = new CountryCallingCode("1-340", 1784, ISOCountry.US_VIRGIN_ISLANDS)
  val `+1-284` = new CountryCallingCode("1-284", 1284, ISOCountry.BRITISH_VIRGIN_ISLANDS)
  val `+1-784` = new CountryCallingCode("1-784", 1784, ISOCountry.SAINT_VINCENT_AND_THE_GRENADINES)
  val `+1-868` = new CountryCallingCode("1-868", 1868, ISOCountry.TRINIDAD_AND_TOBAGO)
  val `+1-649` = new CountryCallingCode("1-649", 1649, ISOCountry.TURKS_AND_CAICOS_ISLANDS)
  val `+1-721` = new CountryCallingCode("1-721", 1721, ISOCountry.SINT_MAARTEN)
  val `+1-787` = new CountryCallingCode("1-787", 1787, ISOCountry.PUERTO_RICO)
  val `+1-939` = new CountryCallingCode("1-939", 1939, ISOCountry.PUERTO_RICO)
  val `+1-664` = new CountryCallingCode("1-664", 1664, ISOCountry.SAINT_KITTS_AND_NEVIS)
  val `+1-670` = new CountryCallingCode("1-670", 1670, ISOCountry.NORTHERN_MARIANA_ISLANDS)
  val `+1-758` = new CountryCallingCode("1-758", 1758, ISOCountry.SAINT_LUCIA)
  val `+1-345` = new CountryCallingCode("1-345", 1345, ISOCountry.CAYMAN_ISLANDS)
  val `+1-869` = new CountryCallingCode("1-869", 1869, ISOCountry.SAINT_KITTS_AND_NEVIS)
  val `+1-876` = new CountryCallingCode("1-876", 1876, ISOCountry.JAMAICA)
  val `+1-671` = new CountryCallingCode("1-671", 1671, ISOCountry.GUAM)
  val `+1-473` = new CountryCallingCode("1-473", 1473, ISOCountry.GRENADA)
  val `+1-809` = new CountryCallingCode("1-809", 1809, ISOCountry.DOMINICAN_REPUBLIC)
  val `+1-829` = new CountryCallingCode("1-829", 1829, ISOCountry.DOMINICAN_REPUBLIC)
  val `+1-849` = new CountryCallingCode("1-849", 1849, ISOCountry.DOMINICAN_REPUBLIC)
  val `+1-767` = new CountryCallingCode("1-767", 1767, ISOCountry.DOMINICA)
  val `+1-242` = new CountryCallingCode("1-242", 1242, ISOCountry.BAHAMAS)
  val `+1-441` = new CountryCallingCode("1-441", 1441, ISOCountry.BERMUDA)
  val `+1-246` = new CountryCallingCode("1-246", 1246, ISOCountry.BARBADOS)
  val `+1-684` = new CountryCallingCode("1-684", 1684, ISOCountry.AMERICAN_SAMOA)
  val `+1-264` = new CountryCallingCode("1-264", 1264, ISOCountry.ANGUILLA)
  val `+1-268` = new CountryCallingCode("1-268", 1268, ISOCountry.ANTIGUA_AND_BARBUDA)
  val `+7`     = new CountryCallingCode("7", 7, ISOCountry.RUSSIAN_FEDERATION, ISOCountry.KAZAKHSTAN)
  val `+20`    = new CountryCallingCode("20", 20, ISOCountry.EGYPT)
  val `+27`    = new CountryCallingCode("27", 27, ISOCountry.SOUTH_AFRICA)
  val `+30`    = new CountryCallingCode("30", 30, ISOCountry.GREECE)
  val `+31`    = new CountryCallingCode("31", 31, ISOCountry.NETHERLANDS)
  val `+32`    = new CountryCallingCode("32", 32, ISOCountry.BELGIUM)
  val `+33`    = new CountryCallingCode("33", 33, ISOCountry.FRANCE)
  val `+34`    = new CountryCallingCode("34", 34, ISOCountry.SPAIN)
  val `+36`    = new CountryCallingCode("36", 36, ISOCountry.HUNGARY)
  val `+39`    = new CountryCallingCode("39", 39, ISOCountry.ITALY, ISOCountry.VATICAN_CITY_STATE)
  val `+40`    = new CountryCallingCode("40", 40, ISOCountry.ROMANIA)
  val `+41`    = new CountryCallingCode("41", 41, ISOCountry.SWITZERLAND)
  val `+43`    = new CountryCallingCode("43", 43, ISOCountry.AUSTRIA)
  val `+44`    = new CountryCallingCode("44", 44,
    ISOCountry.UNITED_KINGDOM,
    ISOCountry.GUERNSEY,
    ISOCountry.ISLE_OF_MAN,
    ISOCountry.JERSEY)
  val `+45`    = new CountryCallingCode("45", 45, ISOCountry.DENMARK)
  val `+46`    = new CountryCallingCode("46", 46, ISOCountry.SWEDEN)
  val `+47`    = new CountryCallingCode("47", 47, ISOCountry.NORWAY, ISOCountry.SVALBARD_AND_JAN_MAYEN)
  val `+48`    = new CountryCallingCode("48", 48, ISOCountry.POLAND)
  val `+49`    = new CountryCallingCode("49", 49, ISOCountry.GERMANY)
  val `+51`    = new CountryCallingCode("51", 51, ISOCountry.PERU)
  val `+52`    = new CountryCallingCode("52", 52, ISOCountry.MEXICO)
  val `+53`    = new CountryCallingCode("53", 53, ISOCountry.CUBA)
  val `+54`    = new CountryCallingCode("54", 54, ISOCountry.ARGENTINA)
  val `+55`    = new CountryCallingCode("55", 55, ISOCountry.BRAZIL)
  val `+56`    = new CountryCallingCode("56", 56, ISOCountry.CHILE)
  val `+57`    = new CountryCallingCode("57", 57, ISOCountry.COLOMBIA)
  val `+58`    = new CountryCallingCode("58", 58, ISOCountry.VENEZUELA)
  val `+60`    = new CountryCallingCode("60", 60, ISOCountry.MALAYSIA)
  val `+61`    = new CountryCallingCode("61", 61,
    ISOCountry.AUSTRALIA,
    ISOCountry.COCOS_ISLANDS,
    ISOCountry.CHRISTMAS_ISLAND)
  val `+62`    = new CountryCallingCode("62", 62, ISOCountry.INDONESIA)
  val `+63`    = new CountryCallingCode("63", 63, ISOCountry.PHILIPPINES)
  val `+64`    = new CountryCallingCode("64", 64, ISOCountry.NEW_ZEALAND)
  val `+65`    = new CountryCallingCode("65", 65, ISOCountry.SINGAPORE)
  val `+66`    = new CountryCallingCode("66", 66, ISOCountry.THAILAND)
  val `+81`    = new CountryCallingCode("81", 81, ISOCountry.JAPAN)
  val `+82`    = new CountryCallingCode("82", 82, ISOCountry.SOUTH_KOREA)
  val `+84`    = new CountryCallingCode("84", 84, ISOCountry.VIET_NAM)
  val `+86`    = new CountryCallingCode("86", 86, ISOCountry.CHINA)
  val `+90`    = new CountryCallingCode("90", 90, ISOCountry.TURKEY)
  val `+91`    = new CountryCallingCode("91", 91, ISOCountry.INDIA)
  val `+92`    = new CountryCallingCode("92", 92, ISOCountry.PAKISTAN)
  val `+93`    = new CountryCallingCode("93", 93, ISOCountry.AFGHANISTAN)
  val `+94`    = new CountryCallingCode("94", 94, ISOCountry.SRI_LANKA)
  val `+95`    = new CountryCallingCode("95", 95, ISOCountry.MYANMAR)
  val `+98`    = new CountryCallingCode("98", 98, ISOCountry.IRAN)
  val `+211`   = new CountryCallingCode("211", 211, ISOCountry.SOUTH_SUDAN)
  val `+212`   = new CountryCallingCode("212", 212, ISOCountry.MOROCCO, ISOCountry.WESTERN_SAHARA)
  val `+213`   = new CountryCallingCode("213", 213, ISOCountry.ALGERIA)
  val `+216`   = new CountryCallingCode("216", 216, ISOCountry.TUNISIA)
  val `+218`   = new CountryCallingCode("218", 218, ISOCountry.LIBYA)
  val `+220`   = new CountryCallingCode("220", 220, ISOCountry.GAMBIA)
  val `+221`   = new CountryCallingCode("221", 221, ISOCountry.SENEGAL)
  val `+222`   = new CountryCallingCode("222", 222, ISOCountry.MAURITANIA)
  val `+223`   = new CountryCallingCode("223", 223, ISOCountry.MALI)
  val `+224`   = new CountryCallingCode("224", 224, ISOCountry.GUINEA)
  val `+225`   = new CountryCallingCode("225", 225, ISOCountry.COTE_D_IVOIRE)
  val `+226`   = new CountryCallingCode("226", 226, ISOCountry.BURKINA_FASO)
  val `+227`   = new CountryCallingCode("227", 227, ISOCountry.NIGER)
  val `+228`   = new CountryCallingCode("228", 228, ISOCountry.TOGO)
  val `+229`   = new CountryCallingCode("229", 229, ISOCountry.BENIN)
  val `+230`   = new CountryCallingCode("230", 230, ISOCountry.MAURITIUS)
  val `+231`   = new CountryCallingCode("231", 231, ISOCountry.LIBERIA)
  val `+232`   = new CountryCallingCode("232", 232, ISOCountry.SIERRA_LEONE)
  val `+233`   = new CountryCallingCode("233", 233, ISOCountry.GHANA)
  val `+234`   = new CountryCallingCode("234", 234, ISOCountry.NIGERIA)
  val `+235`   = new CountryCallingCode("235", 235, ISOCountry.CHAD)
  val `+236`   = new CountryCallingCode("236", 236, ISOCountry.CENTRAL_AFRICAN_REPUBLIC)
  val `+237`   = new CountryCallingCode("237", 237, ISOCountry.CAMEROON)
  val `+238`   = new CountryCallingCode("238", 238, ISOCountry.CAPE_VERDE)
  val `+239`   = new CountryCallingCode("239", 239, ISOCountry.SAO_TOME_AND_PRINCIPE)
  val `+240`   = new CountryCallingCode("240", 240, ISOCountry.EQUATORIAL_GUINEA)
  val `+241`   = new CountryCallingCode("241", 241, ISOCountry.GABON)
  val `+242`   = new CountryCallingCode("242", 242, ISOCountry.CONGO)
  val `+243`   = new CountryCallingCode("243", 243, ISOCountry.THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO)
  val `+244`   = new CountryCallingCode("244", 244, ISOCountry.ANGOLA)
  val `+245`   = new CountryCallingCode("245", 245, ISOCountry.GUINEA_BISSAU)
  val `+246`   = new CountryCallingCode("246", 246, ISOCountry.BRITISH_INDIAN_OCEAN_TERRITORY)
  val `+248`   = new CountryCallingCode("248", 248, ISOCountry.SEYCHELLES)
  val `+249`   = new CountryCallingCode("249", 249, ISOCountry.SUDAN)
  val `+250`   = new CountryCallingCode("250", 250, ISOCountry.RWANDA)
  val `+251`   = new CountryCallingCode("251", 251, ISOCountry.ETHIOPIA)
  val `+252`   = new CountryCallingCode("252", 252, ISOCountry.SOMALIA)
  val `+253`   = new CountryCallingCode("253", 253, ISOCountry.DJIBOUTI)
  val `+254`   = new CountryCallingCode("254", 254, ISOCountry.KENYA)
  val `+255`   = new CountryCallingCode("255", 255, ISOCountry.TANZANIA)
  val `+256`   = new CountryCallingCode("256", 256, ISOCountry.UGANDA)
  val `+257`   = new CountryCallingCode("257", 257, ISOCountry.BURUNDI)
  val `+258`   = new CountryCallingCode("258", 258, ISOCountry.MOZAMBIQUE)
  val `+260`   = new CountryCallingCode("260", 260, ISOCountry.ZAMBIA)
  val `+261`   = new CountryCallingCode("261", 261, ISOCountry.MADAGASCAR)
  val `+262`   = new CountryCallingCode("262", 262, ISOCountry.REUNION, ISOCountry.MAYOTTE)
  val `+263`   = new CountryCallingCode("263", 263, ISOCountry.ZIMBABWE)
  val `+264`   = new CountryCallingCode("264", 264, ISOCountry.NAMIBIA)
  val `+265`   = new CountryCallingCode("265", 265, ISOCountry.MALAWI)
  val `+266`   = new CountryCallingCode("266", 266, ISOCountry.LESOTHO)
  val `+267`   = new CountryCallingCode("267", 267, ISOCountry.BOTSWANA)
  val `+268`   = new CountryCallingCode("268", 268, ISOCountry.SWAZILAND)
  val `+269`   = new CountryCallingCode("269", 269, ISOCountry.COMOROS)
  val `+290`   = new CountryCallingCode("290", 290, ISOCountry.SAINT_HELENA)
  val `+291`   = new CountryCallingCode("291", 291, ISOCountry.ERITREA)
  val `+297`   = new CountryCallingCode("297", 297, ISOCountry.ARUBA)
  val `+298`   = new CountryCallingCode("298", 298, ISOCountry.FAROE_ISLANDS)
  val `+299`   = new CountryCallingCode("299", 299, ISOCountry.GREENLAND)
  val `+350`   = new CountryCallingCode("350", 350, ISOCountry.GIBRALTAR)
  val `+351`   = new CountryCallingCode("351", 351, ISOCountry.PORTUGAL)
  val `+352`   = new CountryCallingCode("352", 352, ISOCountry.LUXEMBOURG)
  val `+353`   = new CountryCallingCode("353", 353, ISOCountry.IRELAND)
  val `+354`   = new CountryCallingCode("354", 354, ISOCountry.ICELAND)
  val `+355`   = new CountryCallingCode("355", 355, ISOCountry.ALBANIA)
  val `+356`   = new CountryCallingCode("356", 356, ISOCountry.MALTA)
  val `+357`   = new CountryCallingCode("357", 357, ISOCountry.CYPRUS)
  val `+358`   = new CountryCallingCode("358", 358, ISOCountry.FINLAND, ISOCountry.ALAND_ISLANDS)
  val `+359`   = new CountryCallingCode("359", 359, ISOCountry.BULGARIA)
  val `+370`   = new CountryCallingCode("370", 370, ISOCountry.LITHUANIA)
  val `+371`   = new CountryCallingCode("371", 371, ISOCountry.LATVIA)
  val `+372`   = new CountryCallingCode("372", 372, ISOCountry.ESTONIA)
  val `+373`   = new CountryCallingCode("373", 373, ISOCountry.MOLDOVA)
  val `+374`   = new CountryCallingCode("374", 374, ISOCountry.ARMENIA)
  val `+375`   = new CountryCallingCode("375", 375, ISOCountry.BELARUS)
  val `+376`   = new CountryCallingCode("376", 376, ISOCountry.ANDORRA)
  val `+377`   = new CountryCallingCode("377", 377, ISOCountry.MONACO)
  val `+378`   = new CountryCallingCode("378", 378, ISOCountry.SAN_MARINO)
  val `+380`   = new CountryCallingCode("380", 380, ISOCountry.UKRAINE)
  val `+381`   = new CountryCallingCode("381", 381, ISOCountry.SERBIA)
  val `+382`   = new CountryCallingCode("382", 382, ISOCountry.MONTENEGRO)
  val `+385`   = new CountryCallingCode("385", 385, ISOCountry.CROATIA)
  val `+386`   = new CountryCallingCode("386", 386, ISOCountry.SLOVENIA)
  val `+387`   = new CountryCallingCode("387", 387, ISOCountry.BOSNIA_AND_HERZEGOVINA)
  val `+389`   = new CountryCallingCode("389", 389, ISOCountry.MACEDONIA)
  val `+420`   = new CountryCallingCode("420", 420, ISOCountry.CZECH_REPUBLIC)
  val `+421`   = new CountryCallingCode("421", 421, ISOCountry.SLOVAKIA)
  val `+423`   = new CountryCallingCode("423", 423, ISOCountry.LIECHTENSTEIN)
  val `+500`   = new CountryCallingCode("500", 500, ISOCountry.FALKLAND_ISLANDS)
  val `+501`   = new CountryCallingCode("501", 501, ISOCountry.BELIZE)
  val `+502`   = new CountryCallingCode("502", 502, ISOCountry.GUATEMALA)
  val `+503`   = new CountryCallingCode("503", 503, ISOCountry.EL_SALVADOR)
  val `+504`   = new CountryCallingCode("504", 504, ISOCountry.HONDURAS)
  val `+505`   = new CountryCallingCode("505", 505, ISOCountry.NICARAGUA)
  val `+506`   = new CountryCallingCode("506", 506, ISOCountry.COSTA_RICA)
  val `+507`   = new CountryCallingCode("507", 507, ISOCountry.PANAMA)
  val `+508`   = new CountryCallingCode("508", 508, ISOCountry.SAINT_PIERRE_AND_MIQUELON)
  val `+509`   = new CountryCallingCode("509", 509, ISOCountry.HAITI)
  val `+590`   = new CountryCallingCode(
    "590",
    590,
    ISOCountry.GUADELOUPE,
    ISOCountry.SAINT_BARTHELEMY,
    ISOCountry.SAINT_MARTIN)
  val `+591`   = new CountryCallingCode("591", 591, ISOCountry.BOLIVIA)
  val `+592`   = new CountryCallingCode("592", 592, ISOCountry.GUYANA)
  val `+593`   = new CountryCallingCode("593", 593, ISOCountry.ECUADOR)
  val `+594`   = new CountryCallingCode("594", 594, ISOCountry.FRENCH_GUIANA)
  val `+595`   = new CountryCallingCode("595", 595, ISOCountry.PARAGUAY)
  val `+596`   = new CountryCallingCode("596", 596, ISOCountry.MARTINIQUE)
  val `+597`   = new CountryCallingCode("597", 597, ISOCountry.SURINAME)
  val `+598`   = new CountryCallingCode("598", 598, ISOCountry.URUGUAY)
  val `+599`   = new CountryCallingCode("599", 599, ISOCountry.CURACAO, ISOCountry.BONAIRE)
  val `+670`   = new CountryCallingCode("670", 670, ISOCountry.TIMOR_LESTE)
  val `+672`   = new CountryCallingCode("672", 672, ISOCountry.NORFOLK_ISLAND)
  val `+673`   = new CountryCallingCode("673", 673, ISOCountry.BRUNEI_DARUSSALAM)
  val `+674`   = new CountryCallingCode("674", 674, ISOCountry.NAURU)
  val `+675`   = new CountryCallingCode("675", 675, ISOCountry.PAPUA_NEW_GUINEA)
  val `+676`   = new CountryCallingCode("676", 676, ISOCountry.TONGA)
  val `+677`   = new CountryCallingCode("677", 677, ISOCountry.SOLOMON_ISLANDS)
  val `+678`   = new CountryCallingCode("678", 678, ISOCountry.VANUATU)
  val `+679`   = new CountryCallingCode("679", 679, ISOCountry.FIJI)
  val `+680`   = new CountryCallingCode("680", 680, ISOCountry.PALAU)
  val `+681`   = new CountryCallingCode("681", 681, ISOCountry.WALLIS_AND_FUTUNA)
  val `+682`   = new CountryCallingCode("682", 682, ISOCountry.COOK_ISLANDS)
  val `+683`   = new CountryCallingCode("683", 683, ISOCountry.NIUE)
  val `+685`   = new CountryCallingCode("685", 685, ISOCountry.SAMOA)
  val `+686`   = new CountryCallingCode("686", 686, ISOCountry.KIRIBATI)
  val `+687`   = new CountryCallingCode("687", 687, ISOCountry.NEW_CALEDONIA)
  val `+688`   = new CountryCallingCode("688", 688, ISOCountry.TUVALU)
  val `+689`   = new CountryCallingCode("689", 689, ISOCountry.FRENCH_POLYNESIA)
  val `+690`   = new CountryCallingCode("690", 690, ISOCountry.TOKELAU)
  val `+691`   = new CountryCallingCode("691", 691, ISOCountry.MICRONESIA)
  val `+692`   = new CountryCallingCode("692", 692, ISOCountry.MARSHALL_ISLANDS)
  val `+850`   = new CountryCallingCode("850", 850, ISOCountry.NORTH_KOREA)
  val `+852`   = new CountryCallingCode("852", 852, ISOCountry.HONG_KONG)
  val `+853`   = new CountryCallingCode("853", 853, ISOCountry.MACAO)
  val `+855`   = new CountryCallingCode("855", 855, ISOCountry.CAMBODIA)
  val `+856`   = new CountryCallingCode("856", 856, ISOCountry.LAO_PEOPLES_DEMOCRATIC_REPUBLIC)
  val `+880`   = new CountryCallingCode("880", 880, ISOCountry.BANGLADESH)
  val `+886`   = new CountryCallingCode("886", 886, ISOCountry.TAIWAN)
  val `+960`   = new CountryCallingCode("960", 960, ISOCountry.MALDIVES)
  val `+961`   = new CountryCallingCode("961", 961, ISOCountry.LEBANON)
  val `+962`   = new CountryCallingCode("962", 962, ISOCountry.JORDAN)
  val `+963`   = new CountryCallingCode("963", 963, ISOCountry.SYRIAN_ARAB_REPUBLIC)
  val `+964`   = new CountryCallingCode("964", 964, ISOCountry.IRAQ)
  val `+965`   = new CountryCallingCode("965", 965, ISOCountry.KUWAIT)
  val `+966`   = new CountryCallingCode("966", 966, ISOCountry.SAUDI_ARABIA)
  val `+967`   = new CountryCallingCode("967", 967, ISOCountry.YEMEN)
  val `+968`   = new CountryCallingCode("968", 968, ISOCountry.OMAN)
  val `+970`   = new CountryCallingCode("970", 970, ISOCountry.PALESTINE)
  val `+971`   = new CountryCallingCode("971", 971, ISOCountry.UNITED_ARAB_EMIRATES)
  val `+972`   = new CountryCallingCode("972", 972, ISOCountry.ISRAEL)
  val `+973`   = new CountryCallingCode("973", 973, ISOCountry.BAHRAIN)
  val `+974`   = new CountryCallingCode("974", 974, ISOCountry.QATAR)
  val `+975`   = new CountryCallingCode("975", 975, ISOCountry.BHUTAN)
  val `+976`   = new CountryCallingCode("976", 976, ISOCountry.MONGOLIA)
  val `+977`   = new CountryCallingCode("977", 977, ISOCountry.NEPAL)
  val `+992`   = new CountryCallingCode("992", 992, ISOCountry.TAJIKISTAN)
  val `+993`   = new CountryCallingCode("993", 993, ISOCountry.TURKMENISTAN)
  val `+994`   = new CountryCallingCode("994", 994, ISOCountry.AZERBAIJAN)
  val `+995`   = new CountryCallingCode("995", 995, ISOCountry.GEORGIA)
  val `+996`   = new CountryCallingCode("996", 996, ISOCountry.KYRGYZSTAN)
  val `+998`   = new CountryCallingCode("998", 998, ISOCountry.UZBEKISTAN)
  /** *
    * Mobile Satellite Communication
    * Global Satellite Communication
    * Universal Personal Telecommunications
    */
  val `+800`   = new CountryCallingCode("800", 800)
  val `+808`   = new CountryCallingCode("808", 808)
  val `+870`   = new CountryCallingCode("870", 870)
  val `+878`   = new CountryCallingCode("878", 878)
  val `+881`   = new CountryCallingCode("881", 881)
  val `+882`   = new CountryCallingCode("882", 882)
  val `+883`   = new CountryCallingCode("883", 883)
  val `+888`   = new CountryCallingCode("888", 888)
  val `+979`   = new CountryCallingCode("979", 979)
  // format: ON

  /**
   * Retrieves CountryCallingCode based on calling code.
   *
   * @param phoneCode Country code, ie. 1, 33
   * @return CountryCallingCode
   */
  def apply(phoneCode: String): CountryCallingCode =
    CountryCallingCode.values.find(phoneCode == _.toString) match {
      case Some(code) ⇒ code
      case None       ⇒ throw new ParseException(s"Invalid value '$phoneCode' for CountryCallingCode")
    }

  /**
   * Retrieves Option[CountryCallingCode] based on calling code.
   *
   * @param phoneCode Country code, ie. 1, 33
   * @return Option[ISOCouCountryCallingCodentry]
   */
  def from(phoneCode: String): Option[CountryCallingCode] =
    CountryCallingCode.values.find(phoneCode == _.toString)

  /**
   * Retrieves CountryCallingCode based on numeric code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericalCode Numeric code, ie. 1, 33
   * @return CountryCallingCode
   */
  def apply(numericalCode: Int): CountryCallingCode =
    CountryCallingCode.values.find(numericalCode == _.numericalCode) match {
      case Some(country) ⇒ country
      case _ ⇒
        throw new ParseException(s"Invalid country calling code '$numericalCode' for CountryCallingCode")
    }

  /**
   * Retrieves Option[CountryCallingCode] based on numeric code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericalCode Numeric code, ie. 1, 3
   * @return Option[CountryCallingCode]
   */
  def from(numericalCode: Int): Option[CountryCallingCode] =
    CountryCallingCode.values.find(numericalCode == _.numericalCode)

  /**
   * Retrieves CountryCallingCode using ISOCountry.
   * https://www.iso.org/obp/ui/#search
   *
   * @param country ISOCountry.JAPAN, ISOCountry("US")
   * @return Option[CountryCallingCode]
   */
  def apply(country: ISOCountry): CountryCallingCode =
    CountryCallingCode.values.find(_.countries.contains(country)) match {
      case Some(currency) ⇒ currency
      case _              ⇒ throw new ParseException(s"Invalid country '$country' for CountryCallingCode")
    }

  /**
   * Retrieves Option[CountryCallingCode] using ISOCountry.
   * https://www.iso.org/obp/ui/#search
   *
   * @param country ISOCountry.JAPAN, ISOCountry("US")
   * @return Option[CountryCallingCode]
   */
  def from(country: ISOCountry): Option[CountryCallingCode] =
    CountryCallingCode.values.find(_.countries.contains(country))
}
