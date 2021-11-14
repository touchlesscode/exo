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

object ISOContinent extends Enum {

  sealed class EnumVal(
    val value: String,
    val name:  String) extends Value

  type ISOContinent = EnumVal

  // format: OFF
  val AFRICA        = new ISOContinent("AF", "Africa")
  val ANTARCTICA    = new ISOContinent("AN", "Antarctica")
  val ASIA          = new ISOContinent("AS", "Asia")
  val EUROPE        = new ISOContinent("EU", "Europe")
  val NORTH_AMERICA = new ISOContinent("NA", "North America")
  val OCEANIA       = new ISOContinent("OC", "Oceania")
  val SOUTH_AMERICA = new ISOContinent("SA", "South America")
  // format: ON

  /**
   * Retrieves ISOContinent based on alpha-2 continent code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param continentCode Country code, ie. NA, AF
   * @return Option[ISOContinent]
   */
  def apply(continentCode: String): ISOContinent =
    ISOContinent.values.find(continentCode == _.toString) match {
      case Some(continent) ⇒ continent
      case _ ⇒
        throw new ParseException(s"Invalid value '$continentCode' for ISOContinent")
    }

  /**
   * Retrieves Option[ISOContinent] based on alpha-2 continent code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param continentCode Country code, ie. NA, AF
   * @return Option[ISOContinent]
   */
  def from(continentCode: String): Option[ISOContinent] =
    ISOContinent.values.find(continentCode == _.toString)
}
