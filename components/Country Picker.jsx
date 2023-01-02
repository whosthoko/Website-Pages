import React from "react";

function CountryPicker () {
    return (
        <select name="country" className="form-control" id="country">
        <option value="0" label="Select A Country" selected="selected">Select A Country</option>
        <optgroup id="country-optgroup-Africa" label="Africa">
            <option value="DZ" label="Algeria">Algeria</option>
            <option value="AO" label="Angola">Angola</option>
            <option value="CM" label="Cameroon">Cameroon</option>
            <option value="CF" label="Central African Republic">Central African Republic</option>
            <option value="CI" label="Côte d’Ivoire">Côte d’Ivoire</option>
            <option value="EG" label="Egypt">Egypt</option>
            <option value="GQ" label="Equatorial Guinea">Equatorial Guinea</option>
            <option value="ER" label="Eritrea">Eritrea</option>
            <option value="ET" label="Ethiopia">Ethiopia</option>
            <option value="GA" label="Gabon">Gabon</option>
            <option value="GH" label="Ghana">Ghana</option>
            <option value="KE" label="Kenya">Kenya</option>
            <option value="MR" label="Mauritania">Mauritania</option>
            <option value="MU" label="Mauritius">Mauritius</option>
            <option value="MA" label="Morocco">Morocco</option>
            <option value="NG" label="Nigeria">Nigeria</option>
            <option value="RW" label="Rwanda">Rwanda</option>
            <option value="SN" label="Senegal">Senegal</option>
            <option value="SC" label="Seychelles">Seychelles</option>
            <option value="ZA" label="South Africa">South Africa</option>
            <option value="SD" label="Sudan">Sudan</option>
            <option value="SZ" label="Swaziland">Swaziland</option>
            <option value="ST" label="São Tomé and Príncipe">São Tomé and Príncipe</option>
            <option value="TZ" label="Tanzania">Tanzania</option>
            <option value="TG" label="Togo">Togo</option>
            <option value="TN" label="Tunisia">Tunisia</option>
            <option value="UG" label="Uganda">Uganda</option>
            <option value="ZM" label="Zambia">Zambia</option>
            <option value="ZW" label="Zimbabwe">Zimbabwe</option>
        </optgroup>
        <optgroup id="country-optgroup-Americas" label="Americas">
            <option value="CA" label="Canada">Canada</option>
            <option value="MX" label="Mexico">Mexico</option>
            <option value="US" label="United States">United States</option>
        </optgroup>
        <optgroup id="country-optgroup-Asia" label="Asia">
            <option value="CN" label="China">China</option>
            <option value="HK" label="Hong Kong SAR China">Hong Kong SAR China</option>
            <option value="IN" label="India">India</option>
            <option value="ID" label="Indonesia">Indonesia</option>
            <option value="IL" label="Israel">Israel</option>
            <option value="JP" label="Japan">Japan</option>
            <option value="JO" label="Jordan">Jordan</option>
            <option value="KW" label="Kuwait">Kuwait</option>
            <option value="LB" label="Lebanon">Lebanon</option>
            <option value="OM" label="Oman">Oman</option>
            <option value="PK" label="Pakistan">Pakistan</option>
            <option value="PS" label="Palestinian Territories">Palestinian Territories</option>
            <option value="PH" label="Philippines">Philippines</option>
            <option value="QA" label="Qatar">Qatar</option>
            <option value="SA" label="Saudi Arabia">Saudi Arabia</option>
            <option value="SG" label="Singapore">Singapore</option>
            <option value="KR" label="South Korea">South Korea</option>
            <option value="LK" label="Sri Lanka">Sri Lanka</option>
            <option value="TW" label="Taiwan">Taiwan</option>
            <option value="TH" label="Thailand">Thailand</option>
            <option value="TR" label="Turkey">Turkey</option>
            <option value="AE" label="United Arab Emirates">United Arab Emirates</option>
            <option value="VN" label="Vietnam">Vietnam</option>
        </optgroup>
        <optgroup id="country-optgroup-Europe" label="Europe">
            <option value="AL" label="Albania">Albania</option>
            <option value="AT" label="Austria">Austria</option>
            <option value="BE" label="Belgium">Belgium</option>
            <option value="BA" label="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
            <option value="BG" label="Bulgaria">Bulgaria</option>
            <option value="HR" label="Croatia">Croatia</option>
            <option value="CY" label="Cyprus">Cyprus</option>
            <option value="CZ" label="Czech Republic">Czech Republic</option>
            <option value="DK" label="Denmark">Denmark</option>
            <option value="EE" label="Estonia">Estonia</option>
            <option value="FI" label="Finland">Finland</option>
            <option value="FR" label="France">France</option>
            <option value="DE" label="Germany">Germany</option>
            <option value="GR" label="Greece">Greece</option>
            <option value="HU" label="Hungary">Hungary</option>
            <option value="IS" label="Iceland">Iceland</option>
            <option value="IE" label="Ireland">Ireland</option>
            <option value="IT" label="Italy">Italy</option>
            <option value="LV" label="Latvia">Latvia</option>
            <option value="LT" label="Lithuania">Lithuania</option>
            <option value="LU" label="Luxembourg">Luxembourg</option>
            <option value="MK" label="Macedonia">Macedonia</option>
            <option value="MT" label="Malta">Malta</option>
            <option value="MD" label="Moldova">Moldova</option>
            <option value="MC" label="Monaco">Monaco</option>
            <option value="ME" label="Montenegro">Montenegro</option>
            <option value="NL" label="Netherlands">Netherlands</option>
            <option value="NO" label="Norway">Norway</option>
            <option value="PL" label="Poland">Poland</option>
            <option value="PT" label="Portugal">Portugal</option>
            <option value="RO" label="Romania">Romania</option>
            <option value="RU" label="Russia">Russia</option>
            <option value="SM" label="San Marino">San Marino</option>
            <option value="RS" label="Serbia">Serbia</option>
            <option value="SK" label="Slovakia">Slovakia</option>
            <option value="SI" label="Slovenia">Slovenia</option>
            <option value="ES" label="Spain">Spain</option>
            <option value="SE" label="Sweden">Sweden</option>
            <option value="CH" label="Switzerland">Switzerland</option>
            <option value="GB" label="United Kingdom">United Kingdom</option>
            <option value="VA" label="Vatican City">Vatican City</option>
        </optgroup>
        <optgroup id="country-optgroup-Oceania" label="Oceania">
            <option value="AU" label="Australia">Australia</option>
            <option value="NZ" label="New Zealand">New Zealand</option>
        </optgroup>
    </select>
    )
}

export default CountryPicker;