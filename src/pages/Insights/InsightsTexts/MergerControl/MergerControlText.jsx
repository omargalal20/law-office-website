import React from 'react';

const MergerControlText = () => {
  return (
    <div
      style={{
        color: '#000000',
        fontSize: '30px',
        fontFamily: 'Montserrat',
        fontWeight: '400',
        lineHeight: '1.2',
      }}>
      <p style={{ marginBottom: '20px' }}>
        Merger control is a fundamental tool used worldwide to examine and
        assess the effects a transaction will have on competition and to
        intervene if the negative effects prevail. In Egypt,
        competition/antitrust matters are governed by Competition Law no. 3 of
        2005 (COL). On 29 December 2022, Law no. 172 of 2022 (CLA)was published
        and entered into force bringing about a number of amendments to the COL.
        It introduces a long-awaited change to Egyptian merger-control
        procedures. Replacing the post-closing merger notification system in
        place since 2005, the CLA introduces a pre-closing regime for merger
        control (Pre-Merger Regime).
      </p>

      <h2 style={{ marginBottom: '20px' }}>
        Enforceability of the Pre-Merger Regime
      </h2>

      <p style={{ marginBottom: '20px' }}>
        The CLA became effective from 30 December2022 and should not have a
        retroactive effect, according to a statement from the Egyptian
        Competition Authority (ECA) on 4 January 2023. Thus, any transactions
        that closed before 30 December 2022 remain subject only to the
        post-closing merger notification.
      </p>
      <p style={{ marginBottom: '20px' }}>
        That said, we believe that actual enforcement of the Pre-Merger Regime
        won’t be until after issuance of the amendments to the COL Executive
        Regulations, which will address fundamental aspects of the Pre-Merger
        Regime, such as the method(s) for calculating (i) the new threshold
        triggering a notification obligation and (ii) the fees for officially
        filing the notification. It is also expected that these amendments will
        be accompanied by new guidelines and a notification form prepared by the
        ECA.
      </p>

      <h2 style={{ marginBottom: '20px' }}>
        Transactions subject to the Pre-Merger Regime
      </h2>

      <p style={{ marginBottom: '20px' }}>
        According to the CLA, the Pre-Merger Regime applies to any economic
        concentration, which is defined as any change in control or material
        influence of one or more entities, resulting from any of the following:
      </p>
      <ul style={{ marginBottom: '20px' }}>
        <li>Mergers</li>
        <li>Acquisition</li>
        <li>Joint Venture</li>
      </ul>

      <h2 style={{ marginBottom: '20px' }}>
        Thresholds triggering an obligation to file a notification
      </h2>

      <p style={{ marginBottom: '20px' }}>
        The CLA sets two separate thresholds that trigger the obligation to file
        a notification under the Pre-Merger Regime:
      </p>
      <ul style={{ marginBottom: '20px' }}>
        <li>
          The cumulative value of annual Egyptian turnover or of assets located
          in Egypt for all concerned parties of the economic concentration
          exceeds EGP 900 million (approx. €30.5 million)
        </li>
        <li>
          The cumulative value of annual worldwide turnover or assets located
          worldwide for all concerned parties of the economic concentration
          exceeds EGP 7.5 billion (approx. €254 million)
        </li>
      </ul>

      <h2 style={{ marginBottom: '20px' }}>Examination process</h2>

      <p style={{ marginBottom: '20px' }}>
        Economic concentrations will be reviewed by an ECA committee—this can
        (but doesn’t have to) involve two phases:
      </p>
      <ul style={{ marginBottom: '20px' }}>
        <li>Phase 1</li>
        <li>Phase 2</li>
      </ul>

      <h2 style={{ marginBottom: '20px' }}>Exempted transactions</h2>

      <p style={{ marginBottom: '20px' }}>
        The CLA has listed certain transactions that are exempt from the
        Pre-Merger Regime:
      </p>
      <ul style={{ marginBottom: '20px' }}>
        <li>Temporary acquisitions</li>
        <li>A merger or acquisition between subsidiaries</li>
      </ul>

      <h2 style={{ marginBottom: '20px' }}>
        Different process for firms regulated by the Financial Regulatory
        Authority
      </h2>

      <p style={{ marginBottom: '20px' }}>
        The Financial Regulatory Authority (FRA) supervises Egyptian companies
        that perform capital market, nonbanking financial institution and
        insurance-related activities. The CLA establishes a different path for
        pre-closing notifications for economic concentrations that occur in any
        FRA-supervised activities.
      </p>

      <h2 style={{ marginBottom: '20px' }}>Filing fees</h2>

      <p style={{ marginBottom: '20px' }}>
        Unlike the post-closing filing regime, which was free of charge, the
        Pre-Merger Regime will not be free. The ECA will apply an official fee,
        capped at EGP 100,000(approx. €3,400) to be paid by the applicant for
        the examinations made by the ECA.
      </p>

      <h2 style={{ marginBottom: '20px' }}>
        Penalties for failing to comply with the new rules
      </h2>

      <p style={{ marginBottom: '20px' }}>
        Failure to observe the Pre-Merger Regime can result in a fine of between
        1 percent and 10 percent of the value of the gross turnover or assets
        for the concerned parties, based on the latest approved consolidated
        financial reports.
      </p>
    </div>
  );
};

export default MergerControlText;
