const questions = [
  {
    question: "Identify Type of prevention: Prostate Cancer Screening",
    answers: [
      { text: "Secondary prevention", correct: true },
      { text: "Primary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Physio- therapy and associated medical therapy, following a stroke",
    answers: [
      { text: "Tertiary prevention", correct: true },
      { text: "Primary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Measles vaccination",
    answers: [
      { text: "Primary prevention", correct: true },
      { text: "Secondary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Breast cancer and cervical cancer screening in women",
    answers: [
      { text: "Secondary prevention", correct: true },
      { text: "Primary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Skin contact with an open fire / Burn",
    answers: [
      { text: "Sufficient", correct: true },
      { text: "Necessary", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Measles virus / Measles",
    answers: [
      { text: "Necessary", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Vibrio cholerae/ Cholera",
    answers: [
      { text: "Necessary", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Smoking  / Lung cancer",
    answers: [
      { text: "Not necessary, not sufficient ", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Necessary", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Usual time of diagnosis (Look at the Att #1)",
    answers: [
      { text: "D", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "A", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Exposure (Look at the Att #1)",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Diagnosis that was established during the screening program Natural History of Disease Timeline: (Look at the Att # 1)",
    answers: [
      { text: "B", correct: true },
      { text: "A", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Time of primary prevention (Look at the Att #1) Natural History of Disease Timeline:",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: compare frequency of brain cancer among anatomists with frequency in general population ",
    answers: [
      { text: "Risk factor", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Distribution", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: mark on a map the residences of all children born with birth defects within 2    miles of a hazardous waste site",
    answers: [
      { text: "Risk factor", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Distribution", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: graph the number of cases of congenital syphilis by year for the country ",
    answers: [
      { text: "Distribution", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: recommend that close contacts of a child recently reported with    meningococcal meningitis receive antibiotics",
    answers: [
      { text: "Application", correct: true },
      { text: "Determinants", correct: false },
      { text: "Distribution", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of women in State A who died from heart disease in 2004     estimated number of women living in State A on July 1, 2004  ",
    answers: [
      { text: "Rate ", correct: true },
      { text: "Proportion ", correct: false },
      { text: "Ratio ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of women in State A who died from heart disease in 2004 /    estimated number of women living in State A on July 1, 2004  ",
    answers: [
      { text: "Ratio ", correct: true },
      { text: " Proportion ", correct: false },
      { text: " Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of women in State A who died from lung cancer in 2004  /   number of women in State A who died from cancer (all types) in 2004 ",
    answers: [
      { text: "Proportion ", correct: true },
      { text: "Ratio", correct: false },
      { text: "Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of people in Region A who died from rabies in 2022     number of people in Region A who died in 2022  ",
    answers: [
      { text: "Proportion", correct: true },
      { text: "Ratio", correct: false },
      { text: " Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "Calculate cumulative incidence from Oct 1 to Apr 1 (Look at the Att #1)",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Calculate Attack rate from Oct 1 to Sept 30 (Look at the Att #1)",
    answers: [
      { text: "4", correct: true },
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Calculate point prevalence Oct 1 (Look at the Att #1)",
    answers: [
      { text: "6", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Calculate point prevalence Apr 1 (Look at the Att #1)",
    answers: [
      { text: "7", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "In the country A, as a result of the provision of effective diabetes treatment, an increase in the life expectancy of patients was noted. What epidemiological characteristics can this affect?   ",
    answers: [
      { text: "increase prevalence ", correct: true },
      { text: "increase in incidence ", correct: false },
      { text: "decrease in prevalence ", correct: false },
      { text: "decrease in incidence ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Calculate the relative risk for a population in which incidence of disease among exposed is 100 and non-exposed is 25",
    answers: [
      { text: "100/25=4  ", correct: true },
      { text: "100/25*100=400   ", correct: false },
      { text: "25/100=0.25 ", correct: false },
      { text: "100-25=75  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In a survey of 1,150 women who gave birth in Maine in 2000, a total of 468 reported taking a multivitamin at least 4 times a week during the month before becoming pregnant. Calculate the prevalence of frequent multivitamin use in this group",
    answers: [
      { text: "468/1150*100 ", correct: true },
      { text: "1150/468 ", correct: false },
      { text: "468/1150-100 ", correct: false },
      { text: "1150-468/100 ", correct: false },
      { text: "1150/468*100  ", correct: false },
    ],
  },
  {
    question: "In 2001, 450 new cases of acquired immunodeficiency syndrome (AIDS) were reported in the United States. The estimated mid-year population of the U.S. in 2001 was approximately 10000. Calculate the incidence rate of AIDS in 2001",
    answers: [
      { text: "450/10000*100 ", correct: true },
      { text: "450/10000-100 ", correct: false },
      { text: "10000/450*100 ", correct: false },
      { text: "10000-450*100 ", correct: false },
      { text: "450*10000/100 ", correct: false },
    ],
  },
  {
    question: "In 2001, 200 new cases of hepatitis С were reported in the United States. The estimated mid-year population of the U.S. in 2001 was approximately 1000000. Calculate the incidence rate of hepatitis С in 2001",
    answers: [
      { text: "200/1000000", correct: true },
      { text: "1000000/200*10 ", correct: false },
      { text: "1000-200*10 ", correct: false },
      { text: "200/1000000-100 ", correct: false },
      { text: "200*1000/10 ", correct: false },
    ],
  },
  {
    question: "In the study of atherosclerosis, 200 of the 259 diabetic men died during the 15-year follow-up period. Calculate the risk of death for these men.",
    answers: [
      { text: "(200 / 259) x 100 ", correct: true },
      { text: "(259 / 200) x 100 ", correct: false },
      { text: "(200 + 259) / 100   ", correct: false },
      { text: "200 / 259 + 100 ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A city has a population of 50000. Of these, 5,000 have disease Y, which is incurable. There are 100 new cases and 40 deaths each year from this disease. There are 1500 deaths per year from all causes. The incidence of this disease is given by",
    answers: [
      { text: "100/50000-5000", correct: true },
      { text: "40/50000  ", correct: false },
      { text: "1500/50000-1500", correct: false },
      { text: "5000/50000  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A city has a population of 50000. Of these, 5000 have disease Y, which is incurable. There are 100 new cases and 40 deaths each year from this disease. There are 1500 deaths per year from all causes. The prevalence of this disease is given by",
    answers: [
      { text: "5000/50000  ", correct: true },
      { text: "100/50000  ", correct: false },
      { text: "1500/50000  ", correct: false },
      { text: "40/50000  ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In the definition of epidemiology, “distribution” refers to:",
    answers: [
      { text: "All of the above", correct: true },
      { text: "When", correct: false },
      { text: "Where", correct: false },
      { text: "Who", correct: false },
      { text: "Agent, host, environment  ", correct: false },
    ],
  },
  {
    question: "In the definition of epidemiology, “determinants” generally includes: ",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Causes ", correct: false },
      { text: "Sources", correct: false },
      { text: "Risk factors ", correct: false },
      { text: "Agents", correct: false },
    ],
  },
  {
    question: "Epidemiologic triad consists of all of the following except: ",
    answers: [
      { text: "Study of endemic diseases", correct: true },
      { text: "Host", correct: false },
      { text: "Environment ", correct: false },
      { text: "Agent ", correct: false },
      { text: "Time, place, person  ", correct: false },
    ],
  },
  {
    question: "Health surveillance is:",
    answers: [
      { text: "Collection and interpretation of data", correct: true },
      { text: "Interpretation of data", correct: false },
      { text: "Monitoring programmes", correct: false },
      { text: "Collection of data", correct: false },
      { text: "Improvement of research methods", correct: false },
    ],
  },
  {
    question: "The term \"iceberg phenomenon\" in epidemiology means:",
    answers: [
      { text: "That the registered incidence rate is lower than the true", correct: true },
      { text: "Prevalence of asymptomatic cases", correct: false },
      { text: "Discrepancy of the registered morbidity and specific gravity of the persons having the corresponding antibodies", correct: false },
      { text: "Slow-developing, hard-to-recognize infectious disease epidemics", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "When analyzing surveillance data by age, which of the following age groups is preferred?  (Choose one best answer)",
    answers: [
      { text: "Depends on the disease", correct: true },
      { text: "5-year age groups  ", correct: false },
      { text: "10-year age groups ", correct: false },
      { text: "1-year age groups  ", correct: false },
      { text: "Depends on the age", correct: false },
    ],
  },
  {
    question: "Information is presented correctly:",
    answers: [
      { text: "The cumulative incidence of angina pectoris in persons older than 50 years in city N in 1998 was 18 per 100 population per year", correct: true },
      { text: "The incidence of schoolchildren in city N in 1998 was 32.5 per 100 thousand population", correct: false },
      { text: "The incidence of dysentery in the population of city N was 85.2 per 100 thousand population", correct: false },
      { text: "The proportion of cases of arterial hypertension in men aged 20-55 years, on average in large cities of country N in 1990-98, was 25.3%", correct: false },
      { text: "Prevalence of two types", correct: false },
    ],
  },
  {
    question: "In the city of N. the total annual prevalence rate of long-term disease X in 1991, was 105.6 per 100 thousand population  and in 1998 decreased to 70.4. The reasons for the low prevalence (choose all except one):",
    answers: [
      { text: "The emergence of new drugs that lead to an increase in the life expectancy of patients with disease X", correct: true },
      { text: "Reducing the risk of new cases of disease X", correct: false },
      { text: "Increasing death rate as  a result of X-disease ", correct: false },
      { text: "The emergence of new drugs that increase the proportion of cured patients.", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "There were no new cases of Ebola virus in the United States from January 1, 1997 through January 1, 1998. Which of the following epidemiologic terms does this statement describe?",
    answers: [
      { text: "Incidence", correct: true },
      { text: "Lifetime prevalence", correct: false },
      { text: "Period prevalence", correct: false },
      { text: "Point prevalence", correct: false },
      { text: "Mortality rate", correct: false },
    ],
  },
  {
    question: "Which term best describes the pattern of occurrence of the disease noted below in a single area: In May, 8,000 cases of Smallpox were confirmed in the city of «N». A month later, about 100,000 cases of Smallpox in five countries.",
    answers: [
      { text: "Epidemic", correct: true },
      { text: "Outbreak  ", correct: false },
      { text: "Pandemic ", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Endemic  ", correct: false },
    ],
  },
  {
    question: "If the prevalence of a disease has been more or less constant for the past ten years (i.e., new cases have been balanced by cures or deaths of prevalent cases), what would be the effect of a new program that reduces the incidence of the disease?",
    answers: [
      { text: "It would increase prevalence of the disease", correct: true },
      { text: "It would have no effect on the prevalence of disease ", correct: false },
      { text: "It would decrease prevalence of the disease.", correct: false },
      { text: "The effect on prevalence cannot be predicted from the information given.", correct: false },
      { text: "It would decrease mortality of the diseas", correct: false },
    ],
  },
  {
    question: "If the prevalence of a disease has been more or less constant for the past ten years (i.e., new cases have been balanced by cures or deaths of prevalent cases), what would be the effect if a large number of healthy people immigrated into the population?",
    answers: [
      { text: "It would decrease prevalence of the disease.", correct: true },
      { text: "It would increase prevalence of the disease", correct: false },
      { text: "It would have no effect on the prevalence of disease ", correct: false },
      { text: "The effect on prevalence cannot be predicted from the information given.", correct: false },
      { text: "It would decrease mortality of the diseas", correct: false },
    ],
  },
  {
    question: "Dengue fever is indigenous to certain regions of Africa, Central and South America, and the Caribbean. Mosquitoes in these areas carry dengue fever and transmit it from person to person.Use the following choices for Questions:",
    answers: [
      { text: "Endemic ", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "In 2019 there was an outbreak of dengue fever in Hawaii, where the disease is not endemic. It’s believed an infected person visited the Big Island and was bitten by mosquitoes there. The insects then transferred the disease to other individuals they bit, which created what type of disease occurrence?",
    answers: [
      { text: "Outbreak", correct: true },
      { text: "Endemic ", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "According to the World Health Organization, when cases of a disease are in excess of what we would normally expect to see.",
    answers: [
      { text: "Outbreak", correct: true },
      { text: "Endemic ", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "By WHO definition  “the occurrence in a community or region of cases of an illness, specific health-related behaviour, or other health-related events clearly in excess of normal expectancy”.",
    answers: [
      { text: "Epidemic", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Endemic ", correct: false },
    ],
  },
  {
    question: "Flu that spreading from person to person among students in MSI in December ( Look at the att #1)",
    answers: [
      { text: "D", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "A", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Match the epi curve with the outbreak description.  Meat that was infected by E.Coli had been sold for a week in supermarket ( Look at the att #1) ",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " Match the epi curve with the outbreak description. Dishwasher who work in restaurant one day (Saturday only) was salmonella carrier  ( Look at the att # 1) ",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Match the epi curve with the outbreak description. Dishwasher who work in restaurant one day per week (Saturday only) for a month was salmonella carrier ( Look at the att #1) ",
    answers: [
      { text: "C", correct: true },
      { text: "B", correct: false },
      { text: "A", correct: false },
      { text: "D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate.What is the attack rate among those who ate orange? (Look at the Att #1)",
    answers: [
      { text: "45/100", correct: true },
      { text: "4/16", correct: false },
      { text: "10/11", correct: false },
      { text: "46/184", correct: false },
      { text: "5/100", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate. What is the attack rate among those who drank vodka? (Look at the Att #1)",
    answers: [
      { text: "10/11", correct: true },
      { text: "45/100", correct: false },
      { text: "4/16", correct: false },
      { text: "46/184", correct: false },
      { text: "5/100", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate. What is the attack rate among those who ate apple pie?(Look at the Att #1)",
    answers: [
      { text: "46/184", correct: true },
      { text: "45/100", correct: false },
      { text: "10/11", correct: false },
      { text: "4/16", correct: false },
      { text: "5/100", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate. What is the attack rate among those who did not eat orange? (Look at the Att #1)",
    answers: [
      { text: "5/100", correct: true },
      { text: "45/100", correct: false },
      { text: "10/11", correct: false },
      { text: "46/184", correct: false },
      { text: "4/16", correct: false },
    ],
  },
  {
    question: "A direct transmission includes which of the following? ",
    answers: [
      { text: "Droplet spread", correct: true },
      { text: "Vectorborne ", correct: false },
      { text: "Airborne", correct: false },
      { text: "Vehicleborne", correct: false },
      { text: "Foodborne", correct: false },
    ],
  },
  {
    question: "An Indirect transmission includes which of the following?",
    answers: [
      { text: "Vectorborne ", correct: true },
      { text: "Droplet spread", correct: false },
      { text: "Direct contact", correct: false },
      { text: "Foodborne", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Define active immunity",
    answers: [
      { text: "The development of immunity from previous exposure to an agent before a vaccine or natural infection", correct: true },
      { text: "Immunity gained from a person to person transaction", correct: false },
      { text: "Resistance of the entire community because of the people immunity within the community", correct: false },
      { text: "Acquired immunity from previous exposure to an agent before a vaccine.", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Define passive immunity",
    answers: [
      { text: "Immunity gained from a person to person transaction ", correct: true },
      { text: "The development of immunity from previous exposure to an agent before a vaccine or natural infection", correct: false },
      { text: "Acquired immunity from previous exposure to an agent before a vaccine.", correct: false },
      { text: "Resistance of the entire community because of the people immunity within the community", correct: false },
      { text: "Immunogenicity", correct: false },
    ],
  },
  {
    question: "The mode of transport of an infectious agent through the environment to a susceptible host is called a:",
    answers: [
      { text: "Vehicle", correct: true },
      { text: "Reservoir", correct: false },
      { text: "Vector", correct: false },
      { text: "Carrier", correct: false },
      { text: "Agent", correct: false },
    ],
  },
  {
    question: "A study in which children are randomly assigned to receive either a newly formulated vaccine or the currently available vaccine, and are followed to monitor for side effects and effectiveness of each vaccine, is an example of which type of study? ",
    answers: [
      { text: "Experimental ", correct: true },
      { text: "Observational ", correct: false },
      { text: "Observational case-control ", correct: false },
      { text: "Observational cross-sectional  ", correct: false },
      { text: "Not an analytical or epidemiologic study", correct: false },
    ],
  },
  {
    question: "The Iowa Women’s Health Study, in which researchers enrolled 41,837 women in 1986 and collected exposure and lifestyle information to assess the relationship between these factors and subsequent occurrence of cancer, is an example of which type(s) of study? ",
    answers: [
      { text: " Cohort ", correct: true },
      { text: "Experimental ", correct: false },
      { text: "Observational case-control ", correct: false },
      { text: "Observational cross-sectional  ", correct: false },
      { text: "Not an analytical or epidemiologic study", correct: false },
    ],
  },
  {
    question: "British investigators conducted a study to compare measles-mumps-rubella (MMR) vaccine history among 1,294 children with pervasive development disorder (e.g., autism and Asperger’s syndrome) and 4,469 children without such disorders. (They found no association.)  This is an example of which type(s) of study? ",
    answers: [
      { text: "Observational case-control ", correct: true },
      { text: "Observational cohort ", correct: false },
      { text: "Experimental ", correct: false },
      { text: "Observational cross-sectional  ", correct: false },
      { text: "Clinical trial ", correct: false },
    ],
  },
  {
    question: "For the following situation, identify what it reflects: The subjects were women enrolled in a health maintenance Organization. At 3 months, each woman was randomly given one of two types of new rotavirus vaccine. Two weeks later, the participants received a call from a nurse asking if they had any side effects. ",
    answers: [
      { text: "Experimental ", correct: true },
      { text: "Observational cohort ", correct: false },
      { text: "Observational case-control ", correct: false },
      { text: "Observational cross-sectional  ", correct: false },
      { text: "Not an analytical or epidemiologic study", correct: false },
    ],
  },
  {
    question: "American investigators conducted a study to compare measles-mumps-rubella (MMR) vaccine history among 1,294 children with pervasive development disorder (e.g., autism and Asperger’s syndrome) and 4,469 children without such disorders. (They found no association.) This is an example of which type(s) of study?",
    answers: [
      { text: "Case-control ", correct: true },
      { text: "Cohort ", correct: false },
      { text: "Experimental ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: "Clinical trial ", correct: false },
    ],
  },
  {
    question: "A study was conducted to investigate the effect of HIV infection on mortality among people in INDIA with TB. Individuals with TB were recruited from hospitals and their HIV status determined. They were then followed-up over ten years to compare mortality rates in the HIV positive group and HIV negative group.",
    answers: [
      { text: "Cohort study", correct: true },
      { text: "Randomized controlled trial", correct: false },
      { text: "Case-control ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: " Ecological study", correct: false },
    ],
  },
  {
    question: "The measure of association used in a case-control study is:",
    answers: [
      { text: "Odds Ratio", correct: true },
      { text: "Ecologic Correlation", correct: false },
      { text: "Relative Risk", correct: false },
      { text: "Indigence", correct: false },
      { text: "Prevalence", correct: false },
    ],
  },
  {
    question: "If we have a hypothetical group of smokers (exposed) and non-smokers (not exposed), then we can look for the rate of lung cancer (event).  If 17 smokers have lung cancer, 83 smokers do not have lung cancer, one non-smoker has lung cancer, and 99 non-smokers do not have lung cancer.   (Look at the Att #1).Please, calculate the odds  in the unexposed group   ",
    answers: [
      { text: "1/99 = 0.01 ", correct: true },
      { text: "17/83 = 20.5 ", correct: false },
      { text: "17/83 = 0.205 ", correct: false },
      { text: "1/99 = 0.09 ", correct: false },
      { text: " 17/100 = 0.017 ", correct: false },
    ],
  },
  {
    question: "If we have a hypothetical group of smokers (exposed) and non-smokers (not exposed), then we can look for the rate of lung cancer (event).  If 17 smokers have lung cancer, 83 smokers do not have lung cancer, one non-smoker has lung cancer, and 99 non-smokers do not have lung cancer.   (Look at the Att #1). Please, calculate the odds  ratio   ",
    answers: [
      { text: " 0.205/0.01=20.5 ", correct: true },
      { text: "17/83 = 0.205 ", correct: false },
      { text: "1/99 = 0.09 ", correct: false },
      { text: "1/99 = 0.01 ", correct: false },
      { text: "17/83 = 20.5 ", correct: false },
    ],
  },
  {
    question: "Imagine that the incidence of gun violence is compared in two cities, one with relaxed gun laws (A), the other with strict gun laws (B). In the city with relaxed gun laws, there were 50 shootings in a population of 100,000 and in the other city, 10 shootings in a population of 100,000.   What is the relative risk of gun violence in the city with relaxed gun laws (A)?",
    answers: [
      { text: "5", correct: true },
      { text: "0.2", correct: false },
      { text: "10", correct: false },
      { text: "50", correct: false },
      { text: "0.1", correct: false },
    ],
  },
  {
    question: "Imagine that the incidence of gun violence is compared in two cities, one with relaxed gun laws (A), the other with strict gun laws (B). In the city with relaxed gun laws, there were 50 shootings in a population of 100,000 and in the other city, 10 shootings in a population of 100,000. What is the relative risk of gun violence in the city with strict gun laws (B)?",
    answers: [
      { text: "0.2", correct: true },
      { text: "5", correct: false },
      { text: "10", correct: false },
      { text: "50", correct: false },
      { text: "0.1", correct: false },
    ],
  },
  {
    question: "Consider the treatment of patients with endocarditis caused by Staphylococcus aureus (SA). Although the mortality rate for this disease ranges from 25% to 47% (6), let us assume that in the population of interest, White males aged 30 to 60 the mortality rate is 38% with the standard antibiotic treatment of penicillin, methycillin, vancomycin and other antibiotics. However, a new drug has been developed that attacks the bacteria’s ability to protect itself from the human immune system rather than interfering with cell wall development. The question is this: What are the odds of dying with the new drug as opposed to the standard antibiotic therapy protocol?  (Look at the Att #1). Table. Results from fictional SA endocarditis treatment study  ",
    answers: [
      { text: "OR = (a/b)/(c/d) = (152/17)/(262/103) = 8.94/2.41 = 3.71", correct: true },
      { text: "OR = (a/b)-(c/d) = (152/17)/(262/103) = 8.94/2.41 = 3.71", correct: false },
      { text: "OR = (a/b)/(c/d) = (152/17)/(262/103) = 8.94/2.41 = 3.", correct: false },
      { text: "OR = (a/c)/(c/d) = (152/17)/(262/103) = 8.94/2.41 = 3.71", correct: false },
      { text: "OR = (a/c)/(b/d) = (152/17)/(262/103) = 8.94/2.41 = 3.71", correct: false },
    ],
  },
  {
    question: "Consider the treatment of patients with endocarditis caused by Staphylococcus aureus (SA). Although the mortality rate for this disease ranges from 25% to 47% (6), let us assume that in the population of interest, White males aged 30 to 60 the mortality rate is 38% with the standard antibiotic treatment of penicillin, methycillin, vancomycin and other antibiotics. However, a new drug has been developed that attacks the bacteria’s ability to protect itself from the human immune system rather than interfering with cell wall development. The question is this: What are the odds of dying with the new drug as opposed to the standard antibiotic therapy protocol? The formula can also be presented as (a × d)/(b × c) (this is called the cross-product). (Look at the Att #1). Table. Results from fictional SA endocarditis treatment study",
    answers: [
      { text: "OR = (152 × 103)/ (17 × 248) = (15656/4216) = 3.71.", correct: true },
      { text: "OR = (152 - 103)/ (17 - 248) = (15656/4216) = 3.71.", correct: false },
      { text: "OR = (152 / 103)+ (17/ 248) = (15656/4216) = 3.71", correct: false },
      { text: "OR = (152 × 103)+ (17 × 248) = (15656/4216) = 3.71.", correct: false },
      { text: " OR = (152 + 103)/ (17 + 248) = (15656/4216) = 3.71.", correct: false },
    ],
  },
  {
    question: "Which of the following is an advantage of a case-control study?",
    answers: [
      { text: "It may be used to study etiology of a rare disease. ", correct: true },
      { text: " Multiple disease outcomes following a selected exposure can be readily studied.", correct: false },
      { text: " Dependence on recall by subjects in the study minimized.", correct: false },
      { text: " It is possible to determine the true incidence of the disease.", correct: false },
      { text: "There is little or no bias in assessment of exposure", correct: false },
    ],
  },
  {
    question: "What is the measure of association for a case-control study?",
    answers: [
      { text: "Odds ratio", correct: true },
      { text: "Relative risk", correct: false },
      { text: " prevalence ", correct: false },
      { text: "Confidence interval", correct: false },
      { text: "incidence ", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Hypertension and Stroke. The risk ratio in this study is: (Look at the Att #1)",
    answers: [
      { text: "(60/60+40)/(25/25+75)=", correct: true },
      { text: "B. (60/100+40)/(25/100+75)=", correct: false },
      { text: "(60/60+25)/(40/40+75)=", correct: false },
      { text: "(60*75)/(25*40)=", correct: false },
      { text: "(60*40)/(25*75)=", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Hypertension and Stroke. The Odd ratio in this study is: (Look at the Att #1)",
    answers: [
      { text: "(60*75)/(25*40)=", correct: true },
      { text: "B. (60/100+40)/(25/100+75)=", correct: false },
      { text: "(60/60+25)/(40/40+75)=", correct: false },
      { text: "(60/60+40)/(25/25+75)=", correct: false },
      { text: "(60*40)/(25*75)=", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Hypertension and Stroke. The Relative risk in this study is: (Look at the Att #1)",
    answers: [
      { text: "(60/60+40)/(25/25+75)=", correct: true },
      { text: "B. (60/100+40)/(25/100+75)=", correct: false },
      { text: "(60/60+25)/(40/40+75)=", correct: false },
      { text: "(60*75)/(25*40)=", correct: false },
      { text: "(60*40)/(25*75)=", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Obesity and Diabetes type 2, The Odd ratio in this study is: (Look at the Att #1)",
    answers: [
      { text: "85*75/25*15", correct: true },
      { text: "85/15*25/75", correct: false },
      { text: "(85/85+15)/(25/25+75)=", correct: false },
      { text: "(85/85+25)/(15/15+75)=", correct: false },
      { text: "85*25/75*15", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Obesity and Diabetes type 2, The Relative Risk in this study is: (Look at the Att #1)",
    answers: [
      { text: "(85/85+15)/(25/25+75)=", correct: true },
      { text: "85/15*25/76", correct: false },
      { text: "85*75/25*16", correct: false },
      { text: "(85/85+25)/(15/15+75)=", correct: false },
      { text: "85*25/75*16", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between Obesity and Diabetes type 2, The Risk ratio in this study is: (Look at the Att #1)",
    answers: [
      { text: "(85/85+15)/(25/25+75)=", correct: true },
      { text: "85/15*25/77", correct: false },
      { text: "85*75/25*17", correct: false },
      { text: "(85/85+25)/(15/15+75)=", correct: false },
      { text: "85*25/75*17", correct: false },
    ],
  },
  {
    question: "Priority areas of application of cohort epidemiological studies are",
    answers: [
      { text: "Different effects of one cause in one study", correct: true },
      { text: "Rare diseases", correct: false },
      { text: "One consequence of different causes in one study", correct: false },
      { text: "All of the above", correct: false },
      { text: "Chronic disease", correct: false },
    ],
  },
  {
    question: "A cohort study differs from a case-control study in that: ",
    answers: [
      { text: "Subjects are enrolled or categorized on the basis of their exposure status in a cohort study but not in a case-control study", correct: true },
      { text: "Subjects are asked about their exposure status in a cohort study but not in a casecontrol study ", correct: false },
      { text: "Cohort studies require many years to conduct, but case-control studies do not", correct: false },
      { text: "Cohort studies are conducted to investigate chronic diseases, case-control studies are used for infectious diseases ", correct: false },
      { text: "neither above", correct: false },
    ],
  },
  {
    question: "Researchers conduct analytical study of pancreatic cancer. The study included 200 cases and 200 controls. Of the cases, 80% reported they smoked cigarettes. Among the controls, 50% reported they smoked cigarettes.What is the type of study?     ",
    answers: [
      { text: "Case-control", correct: true },
      { text: " Cohort", correct: false },
      { text: "nan", correct: false },
      { text: " Clinical trial", correct: false },
      { text: "Experimental study", correct: false },
    ],
  },
  {
    question: "A harmless inactive substance offered under the guise of a drug that does not differ from it in appearance, smell, texture, is called:",
    answers: [
      { text: "Placebo", correct: true },
      { text: "Analog of the studied drug", correct: false },
      { text: "Homeopathic medicine", correct: false },
      { text: "Supplement", correct: false },
      { text: "Randomization ", correct: false },
    ],
  },
  {
    question: "A study in which the patient does not know and the doctor knows what treatment the patient is receiving is called:",
    answers: [
      { text: "Single blind", correct: true },
      { text: "Triple blind", correct: false },
      { text: "Double blind", correct: false },
      { text: "Placebo-controlled", correct: false },
      { text: "It is impossible for any type of study", correct: false },
    ],
  },
  {
    question: "In this regard, it can be argued that in a randomized controlled trial, patients receiving a placebo are not deceived (do not receive proper treatment):",
    answers: [
      { text: "Sign the \"Informed consent of the patient\" (where his consent to the use of placebo is provided)", correct: true },
      { text: "The attending physician receives the patient's oral consent to conduct the experiment", correct: false },
      { text: "Placebo has no harmful effects on the body, so its use does not require the consent of the patient", correct: false },
      { text: " Sign consent for hospitalization", correct: false },
      { text: "Sign consent for discharge", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 participants were hospitalized with stroke and 50 participants were hospitalized for other disorders. The main goal of the study was to identify effect of statins (HMG-CoA reductase inhibitors) on development of stroke Results of medical cards review: 10% of participants took statins before the stroke. Out of all participants who took statins 6 had stroke.What is the outcome in the study?       ",
    answers: [
      { text: "Stroke", correct: true },
      { text: "Statins", correct: false },
      { text: " Other disorders", correct: false },
      { text: "CVD", correct: false },
      { text: "Diabetes", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 participants were hospitalized with stroke and 50 participants were hospitalized for other disorders. The main goal of the study was to identify effect of statins (HMG-CoA reductase inhibitors) on development of stroke Results of medical cards review: 10% of participants took statins before the stroke. Out of all participants who took statins 6 had stroke.What is the type of study?        ",
    answers: [
      { text: "Case-control", correct: true },
      { text: "Cohort", correct: false },
      { text: "Cross-Sectional", correct: false },
      { text: "Clinical trial", correct: false },
      { text: "Ecological ", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 participants were hospitalized with stroke and 50 participants were hospitalized for other disorders. The main goal of the study was to identify effect of statins (HMG-CoA reductase inhibitors) on development of stroke Results of medical cards review: 10% of participants took statins before the stroke. Out of all participants who took statins 6 had stroke.What is the measure of association that you will use?   ",
    answers: [
      { text: "OR", correct: true },
      { text: "RR", correct: false },
      { text: "Percentage", correct: false },
      { text: "Proportion", correct: false },
      { text: "Attributable risk", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 participants were hospitalized with stroke and 50 participants were hospitalized for other disorders. The main goal of the study was to identify effect of statins (HMG-CoA reductase inhibitors) on development of stroke Results of medical cards review: 10% of participants took statins before the stroke. Out of all participants who took statins 6 had stroke.Fill out two by two table",
    answers: [
      { text: "A, B,C,D=6, 4, 44, 46", correct: true },
      { text: "A, B,C,D=6, 46, 44, 4", correct: false },
      { text: "A, B,C,D=6, 4, 50, 50", correct: false },
      { text: "A, B,C,D=4, 6, 46, 44", correct: false },
      { text: "A, B,C,D=4, 6, 50, 50", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 participants were hospitalized with stroke and 50 participants were hospitalized for other disorders. The main goal of the study was to identify effect of statins (HMG-CoA reductase inhibitors) on development of stroke Results of medical cards review: 10% of participants took statins before the stroke. Out of all participants who took statins 6 had stroke.Provide proportion for calculation the association based on the numbers in the table ",
    answers: [
      { text: "6*46 /  4*44", correct: true },
      { text: "4*46 /  6*44", correct: false },
      { text: "50 /  4*44", correct: false },
      { text: "6/6+4 / 44/44+46", correct: false },
      { text: "6/50  /  4/100", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. What is the exposure in the study?   ",
    answers: [
      { text: "Alcohol consumption ", correct: true },
      { text: "Diabetes", correct: false },
      { text: "CVD", correct: false },
      { text: "Other disorders", correct: false },
      { text: "Association", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. What is the outcome in the study?       ",
    answers: [
      { text: "Diabetes", correct: true },
      { text: "Alcohol consumption ", correct: false },
      { text: "CVD", correct: false },
      { text: "Other disorders", correct: false },
      { text: "Association", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. What is the type of study?        ",
    answers: [
      { text: "Cross-Sectional", correct: true },
      { text: "Case-control", correct: false },
      { text: "Cohort", correct: false },
      { text: "Clinical trial", correct: false },
      { text: "Ecological ", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. What is the measure of association that you will use?   ",
    answers: [
      { text: "OR", correct: true },
      { text: "RR", correct: false },
      { text: "Percentage", correct: false },
      { text: "Proportion", correct: false },
      { text: "Attributable risk", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. Fill out two by two table",
    answers: [
      { text: "A, B,C,D=18, 2, 82, 98", correct: true },
      { text: "A, B,C,D= 18, 82, 2, 98", correct: false },
      { text: "A, B,C,D= 18, 2, 20, 100", correct: false },
      { text: "A, B,C,D= 5, 45, 5, 45", correct: false },
      { text: "A, B,C,D= 98,8 2, 2, 18", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients. 100 participants were hospitalized with diagnoses diabetes and 100 patients hospitalized for other disorders, comparing their drinking habits in order to identify effect of alcohol consumptions on development of diabetes Results of interview: The prevalence of positive alcohol drinking status among participants was 10%. Out of all participants who consumed alcohol 18 had diabetes. Provide proportion for calculation the association based on the numbers in the table ",
    answers: [
      { text: "18*98 / 2*82", correct: true },
      { text: "18/ 100", correct: false },
      { text: "18*10 / 200*82", correct: false },
      { text: "18/ 18+2  / 82/ 82+98", correct: false },
      { text: "18/ 2*82", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. What is the exposure in the study?   ",
    answers: [
      { text: "Followed antiretroviral regimen", correct: true },
      { text: "AIDS ", correct: false },
      { text: "HIV", correct: false },
      { text: "Did not follow antiretroviral regimen", correct: false },
      { text: "Antiretroviral therapy  ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Education about healthy and safe habits among participants with diabetes in order to diabetic foot",
    answers: [
      { text: "Tertiary prevention", correct: true },
      { text: "Secondary prevention", correct: false },
      { text: "Primary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Rubella immunization",
    answers: [
      { text: "Primary prevention", correct: true },
      { text: "Secondary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: High blood pressure screening among people older than 50",
    answers: [
      { text: "Secondary prevention", correct: true },
      { text: "Primary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "Identify Type of prevention: Vaccination against  cervical cancer",
    answers: [
      { text: "Primary prevention", correct: true },
      { text: "Secondary prevention", correct: false },
      { text: "Tertiary prevention", correct: false },
      { text: "Combination of primary and secondary", correct: false },
      { text: "Combination of secondary and tertiary ", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Treponema pallidum / Syphilis",
    answers: [
      { text: "Necessary", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: Alcohol consumption / Cirrhosis ",
    answers: [
      { text: "Not necessary, not sufficient ", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Necessary", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: HIV infection / AIDS",
    answers: [
      { text: "Necessary", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "For the following risk factor and health outcomes, identify whether it is necessary cause or sufficient cause: A gene mutation associated with Tay-Sachs",
    answers: [
      { text: "Necessary", correct: true },
      { text: "Sufficient", correct: false },
      { text: "Not necessary, not sufficient ", correct: false },
      { text: "It is not the cause ", correct: false },
      { text: "Both necessary and sufficient", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Time of tertiary prevention (Look at the Att #1) Natural History of Disease Timeline:",
    answers: [
      { text: "D", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "A", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Time of secondary prevention (Look at the Att #1) Natural History of Disease Timeline:",
    answers: [
      { text: "B", correct: true },
      { text: "A", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Dual energy x-ray absorptiometry (DXA) for the detection of osteoporosis (Look at the Att #1) Natural History of Disease Timeline ",
    answers: [
      { text: "B", correct: true },
      { text: "A", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Identify following situation by letters A, B, C, D, or E: Time of Tetanus vaccination (Look at the Att #1) Natural History of Disease Timeline",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: tabulate the frequency of clinical signs, symptoms, and laboratory findings    among children with chickenpox in ХХХ ",
    answers: [
      { text: "Distribution", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: Graph the number of malaria cases by year for the country",
    answers: [
      { text: "Distribution", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: mark water sources on the map within 2 miles of reported cases of cholera",
    answers: [
      { text: "Distribution", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "Match the term to the activity that best describes it: describing demographic characteristics of an affected population",
    answers: [
      { text: "Distribution", correct: true },
      { text: "Determinants", correct: false },
      { text: "Application", correct: false },
      { text: "Risk factor", correct: false },
      { text: "Determinants and Application", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of people in Region A  who died from rabies  in 2022     estimated  number of people living in Region A on July 1, 2022 ",
    answers: [
      { text: " Rate ", correct: true },
      { text: "Proportion", correct: false },
      { text: "Ratio", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three: number of women in State A who died from rabies in 2022     number of man in State A who died from rabies in 2022 ",
    answers: [
      { text: "Ratio", correct: true },
      { text: "Proportion", correct: false },
      { text: " Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three:",
    answers: [
      { text: "Ratio", correct: true },
      { text: "Proportion ", correct: false },
      { text: "Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "For each of the fractions shown below, indicate whether it is a ratio, a proportion, a rate, or none of the three",
    answers: [
      { text: "Ratio", correct: true },
      { text: "Proportion ", correct: false },
      { text: "Rate ", correct: false },
      { text: "Ratio& Proportion", correct: false },
      { text: "Proportion & Rate", correct: false },
    ],
  },
  {
    question: "Calculate point prevalence Sept 30 (Look at the Att #1)",
    answers: [
      { text: "5", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: false },
    ],
  },
  {
    question: "Calculate cumulative incidence from June 1 to August 30 (Look at the Att #1)",
    answers: [
      { text: "7", correct: true },
      { text: "6", correct: false },
      { text: "1", correct: false },
      { text: "9", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Calculate cumulative incidence from July 1 to August 30(Look at the Att #1)",
    answers: [
      { text: "1", correct: true },
      { text: "6", correct: false },
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "Calculate cumulative incidence from June 1 to July 1 (Look at the Att #1)",
    answers: [
      { text: "6", correct: true },
      { text: "7", correct: false },
      { text: "1", correct: false },
      { text: "9", correct: false },
      { text: "3", correct: false },
    ],
  },
  {
    question: "The mortality rate will be high if:  ",
    answers: [
      { text: "the prevalence of the disease and its mortality is high ", correct: true },
      { text: "the prevalence of the disease is high and its mortality is low  ", correct: false },
      { text: "the prevalence of the disease is low and its mortality is high  ", correct: false },
      { text: "prevalence and mortality of this disease is low   ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 15 patients with meningitis, February 1, 2000. Identified 12 new patients with meningitis, February 1, 2001. What is cumulative incidence of meningitis in city A, 2001?                   ",
    answers: [
      { text: "12/ 3500-15                        ", correct: true },
      { text: "12/3500", correct: false },
      { text: "12/ 3500+15                        ", correct: false },
      { text: "12+10 / 3500  ", correct: false },
      { text: "27 / 3500                            ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 12 patients with atherosclerotic disease, February 1, 2000 Identified 15 new patients with atherosclerotic disease, February 1, 2001 What is cumulative incidence of atherosclerotic disease in city A, 2001? ",
    answers: [
      { text: "12/ 3500-15                      ", correct: true },
      { text: "15/3500-12  ", correct: false },
      { text: "15/ 3500+12                       ", correct: false },
      { text: "12+15 / 3500  ", correct: false },
      { text: "15 / 3500                           ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000.  Registered 15 patients with chronic liver disease, February 1, 2000 Identified 25 new patients with chronic liver disease, February 1, 2001 What is cumulative incidence of chronic liver disease in city A, 2001?                  ",
    answers: [
      { text: "25/ 3500-15                      ", correct: true },
      { text: "15/3500-45  ", correct: false },
      { text: "15 / 3500                           ", correct: false },
      { text: "25+15 / 3500  ", correct: false },
      { text: "25 / 3500                            ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 50 patients with brucellosis, February 1, 2000 Identified 20 new patients with brucellosis February 1, 2001 What is point prevalence of brucellosis in city A, February 1, 2000? ",
    answers: [
      { text: "20 / 3500                            ", correct: true },
      { text: "50 / 3500                           ", correct: false },
      { text: "50/ 2500-50                       ", correct: false },
      { text: "50+20 / 3500 ", correct: false },
      { text: "50/3500-20  ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 40 patients with pneumonia, February 1, 2000 Identified 15 new patients with pneumonia, February 1, 2001 What is point prevalence of pneumonia in city A, February 1, 2000?                  ",
    answers: [
      { text: "15 / 3500                            ", correct: true },
      { text: "40/3500-15  ", correct: false },
      { text: "40/ 2000                            ", correct: false },
      { text: "15/2000 ", correct: false },
      { text: "40 / 3500                           ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 25 patients with diabetes February 1, 2000 Identified 50 new patients with diabetes, February 1, 2001 What is point prevalence of diabetes in city A, February 1, 2000?                   ",
    answers: [
      { text: "50+25 / 3500  ", correct: true },
      { text: "50/3500-25  ", correct: false },
      { text: "25/ 3500-25                       ", correct: false },
      { text: "25 / 3500                           ", correct: false },
      { text: "25 / 3500                            ", correct: false },
    ],
  },
  {
    question: "City A has population of 3500, April 2000. Registered 20 patients with measles, February 1, 2000 Identified 5 new patients with measles February 1, 2001 What is point prevalence of measles in city A, February 1, 2000?               ",
    answers: [
      { text: "5 / 3500     ", correct: true },
      { text: "20 / 3500                           ", correct: false },
      { text: "20/ 3500-20                       ", correct: false },
      { text: "20+50 / 3500 ", correct: false },
      { text: "20/3500-5         ", correct: false },
    ],
  },
  {
    question: "The objectives of epidemiology, in particular, include all except one:",
    answers: [
      { text: "Development of various means and methods to combat the spread of diseases", correct: true },
      { text: "Identifying the causes and spread of diseases", correct: false },
      { text: "Disease description", correct: false },
      { text: "Morbidity forecast for a certain period of questions from the block", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Indicator (cumulative) incidence reflects all except one:",
    answers: [
      { text: "Risk of persons belonging to any population group to be sick with a certain disease", correct: true },
      { text: "New cases of a certain disease in a certain population group over a certain period of time, in a given territory", correct: false },
      { text: "The average risk of contracting a particular disease of persons belonging to any population group, for a certain time, in a given territory", correct: false },
      { text: "The proportion of people who contracted a particular disease for the first time in a given population group over a given period of time, in a given territory", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Prevalence (prevalence, morbidity) - a type of morbidity indicator reflecting:",
    answers: [
      { text: "In any population group for a certain time, in a given territory, all cases of this disease, regardless of the time of occurrence", correct: true },
      { text: "Risk of infection among persons who have come into contact with a patient with an infection", correct: false },
      { text: "Risk of chronic infections (e.g. tuberculosis)", correct: false },
      { text: "For a certain time the proportion of patients with any disease in a given territory in the sum of all patients, regardless of the etiology of diseases", correct: false },
      { text: "Morbidity forecast for a certain period of questions from the block", correct: false },
    ],
  },
  {
    question: "What is the numerator of Prevalence?",
    answers: [
      { text: "Number of all cases of disease", correct: true },
      { text: "Number of new cases of disease", correct: false },
      { text: "Number of population at a specified time ", correct: false },
      { text: "Number of death cases from particular disease", correct: false },
      { text: "The average risk of contracting a particular disease of persons belonging to any population group, for a certain time, in a given territory", correct: false },
    ],
  },
  {
    question: "What is the numerator of Incidence?",
    answers: [
      { text: "Number of new cases of disease", correct: true },
      { text: "Number of all cases of disease", correct: false },
      { text: "Number of population at a specified time ", correct: false },
      { text: "Number of death cases from particular disease", correct: false },
      { text: "The average risk of contracting a particular disease of persons belonging to any population group, for a certain time, in a given territory", correct: false },
    ],
  },
  {
    question: "True about prevalence are all, except:",
    answers: [
      { text: "Rate", correct: true },
      { text: "Specifically for all old and new cases", correct: false },
      { text: "Point prevalence", correct: false },
      { text: "Prevalence of two types", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "Which of  the  following is  classifies the occurrence of disease according to the variables of person, place, and time?",
    answers: [
      { text: "Descriptive Epidemiology", correct: true },
      { text: "Analytic Epidemiology", correct: false },
      { text: "Environmental Epidemiology", correct: false },
      { text: "Experimental  study", correct: false },
      { text: "Ecological study", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a type of descriptive epidemiologic study?",
    answers: [
      { text: "Case Reports", correct: true },
      { text: "Case-Control Study", correct: false },
      { text: "Cohort Study", correct: false },
      { text: "Cross-sectional study", correct: false },
      { text: "  Ecological study", correct: false },
    ],
  },
  {
    question: "Which of following   term  that  refers to   the  Race and socioeconomic status? ",
    answers: [
      { text: "Person Variables", correct: true },
      { text: "Secular Trends", correct: false },
      { text: "Clustering", correct: false },
      { text: "Nativity", correct: false },
      { text: "Community", correct: false },
    ],
  },
  {
    question: " Which of following  terms describe  a disease that occurs rarely and unexpectedly?",
    answers: [
      { text: "sporadic", correct: true },
      { text: " endemic", correct: false },
      { text: "epidemic", correct: false },
      { text: " pandemic", correct: false },
      { text: " zoonotic", correct: false },
    ],
  },
  {
    question: "Malaria, usually no more than 1 cases per month in District 12; last week, 7 cases",
    answers: [
      { text: "outbreack ", correct: true },
      { text: "Epidemic", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Cluster", correct: false },
    ],
  },
  {
    question: "“An epidemic occurring worldwide, or over a very wide area, crossing international boundaries and usually affecting a large number of people”",
    answers: [
      { text: "Pandemic", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Endemic ", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "The influenza (flu) of 1918-1919 killed between 20 and 40 million people. It is one of the most devastating disease occurrence in recorded world history. What is it?",
    answers: [
      { text: "Pandemic", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Endemic ", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "When the disease consistently present at a low level but limited to a particular region or population. ",
    answers: [
      { text: "Endemic ", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "A disease which spreads rapidly, affecting a large number of people within a community, population or region",
    answers: [
      { text: "Endemic ", correct: true },
      { text: "Outbreak", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Epidemic", correct: false },
    ],
  },
  {
    question: "Which term best describes the pattern of occurrence of the disease noted below in a single area? Disease: usually 10–12 cases per 3 month; last week, 20 cases",
    answers: [
      { text: " Outbreak ", correct: true },
      { text: "Endemic ", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: " Epidemic", correct: false },
    ],
  },
  {
    question: "Match the epi curve with the outbreak description. Dishwasher who work in restaurant each day for a week was salmonella carrier ( Look at the att # 1) ",
    answers: [
      { text: "B", correct: true },
      { text: "A", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "  Identify the type of epidemic spread with which it is most consistent: 21 cases of shigellosis among children and workers at a day     care center over a period of 6 weeks, no external source identified (incubation period for shigellosis is usually 1-3 days) ",
    answers: [
      { text: "Propagated  ", correct: true },
      { text: " Intermittent or continuous common source ", correct: false },
      { text: "continuous common source ", correct: false },
      { text: "Point source ", correct: false },
      { text: "Mix sourse", correct: false },
    ],
  },
  {
    question: "Identify the type of epidemic spread with which it is most consistent: 36 cases of giardiasis over 6 weeks traced to occasional use of a supplementary reservoir (incubation period for giardiasis 3-25 days or more, usually 7-10 days)",
    answers: [
      { text: "Intermittent continuous common source ", correct: true },
      { text: "Point source ", correct: false },
      { text: "continuous common source ", correct: false },
      { text: "Propagated  ", correct: false },
      { text: "Mix sourse", correct: false },
    ],
  },
  {
    question: " Identify the type of epidemic spread with which it is most consistent.: 43 cases of norovirus infection over 2 days traced to the ice machine on a  cruise ship (incubation period for norovirus is usually 24-48 hours)",
    answers: [
      { text: "Point source ", correct: true },
      { text: "Intermittent or continuous common source ", correct: false },
      { text: "continuous common source ", correct: false },
      { text: "Propagated  ", correct: false },
      { text: "Mix sourse", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate. What is the attack rate among those who did not drink vodka?(Look at the Att #1)",
    answers: [
      { text: "40/189", correct: true },
      { text: "4/16", correct: false },
      { text: "10/11", correct: false },
      { text: "46/184", correct: false },
      { text: "5/100", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate. What is the attack rate among those who ate apple pie (Look at the Att #1)",
    answers: [
      { text: "4/16", correct: true },
      { text: "40/189", correct: false },
      { text: "10/11", correct: false },
      { text: "46/184", correct: false },
      { text: "5/100", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate  What is the attack rate among those who did not eat Fish? (Look at the Att #1)",
    answers: [
      { text: "25/96", correct: true },
      { text: "38/150 ", correct: false },
      { text: "112/150", correct: false },
      { text: "71/96", correct: false },
      { text: "38//25 ", correct: false },
    ],
  },
  {
    question: "Examine the table and provide proportion for calculation of attack rate  What is the attack rate among those who ate Fish? (Look at the Att #1)",
    answers: [
      { text: "38/150 ", correct: true },
      { text: "25/96", correct: false },
      { text: "112/150", correct: false },
      { text: "71/96", correct: false },
      { text: "38//25 ", correct: false },
    ],
  },
  {
    question: "Virulence of a disease is indicated by:",
    answers: [
      { text: "Case fatality ratio", correct: true },
      { text: "Specific mortality rate", correct: false },
      { text: "Proportional mortality rate", correct: false },
      { text: "Morbidity rate", correct: false },
      { text: "Immunogenicity", correct: false },
    ],
  },
  {
    question: "Diseases that are always present in a community, usually at a low, more or less constant, frequency are classified as having an ____________ pattern. ",
    answers: [
      { text: "Endemic", correct: true },
      { text: "Epidemic", correct: false },
      { text: "Pandemic", correct: false },
      { text: "Sporadic", correct: false },
      { text: "Outbreak", correct: false },
    ],
  },
  {
    question: "Ability of agent to invade host and multiply refers to ",
    answers: [
      { text: "Infectivity", correct: true },
      { text: "Pathogenicity", correct: false },
      { text: "Immunogenicity", correct: false },
      { text: "Virulence", correct: false },
      { text: "Infestation", correct: false },
    ],
  },
  {
    question: "Severity of infection by agent refers to ",
    answers: [
      { text: "Virulence", correct: true },
      { text: "Pathogenicity", correct: false },
      { text: "Immunogenicity", correct: false },
      { text: "Infectivity", correct: false },
      { text: "Infestation", correct: false },
    ],
  },
  {
    question: "Ability of agent to produce specific immunity  refers to",
    answers: [
      { text: "Immunogenicity", correct: true },
      { text: "Pathogenicity", correct: false },
      { text: "Infectivity", correct: false },
      { text: "Virulence", correct: false },
      { text: "Infestation", correct: false },
    ],
  },
  {
    question: "In order to determine effect of student’s habits on academic performance, researchers conducted survey in ISM. They randomly picked a group of students and asked them to fill out form where students had to identify number of parties they attended and grades they got for the last week  What is the type of study?",
    answers: [
      { text: "Case-control ", correct: true },
      { text: "Cohort study", correct: false },
      { text: "Experimental ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: " Ecological study", correct: false },
    ],
  },
  {
    question: "In order to identify possible effect of genetically modified food on development of cancer researchers compared data on average consumption of genetically modified food and average cancer disease rate in two countries (India and Pakistan) What is the type of study?",
    answers: [
      { text: "Cross-sectional  ", correct: true },
      { text: "Cohort study", correct: false },
      { text: "Case-control ", correct: false },
      { text: "Experimental ", correct: false },
      { text: " Ecological study", correct: false },
    ],
  },
  {
    question: "Researchers recruited a group of participants with influenza (type A) who were prescribed antibiotics and who didn’t. The main research question was to identify the effect of antibiotics on immune system of participants. Researchers followed the participants for two weeks and then identified possible immune status of participants. What is the type of study?",
    answers: [
      { text: "Cohort study", correct: true },
      { text: "Case-control ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: " Ecological study", correct: false },
      { text: "Experimental ", correct: false },
    ],
  },
  {
    question: "Researchers enrolled two groups of participants with positive HIV status but different antiretroviral therapy regiment in order to establish effect of two types of therapy on development of renal diseases. Before the enrolment to the study all participants were tested– everyone was renal disease free. What is the type of study?",
    answers: [
      { text: "Cohort study", correct: true },
      { text: "Case-control ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: " Ecological study", correct: false },
      { text: "Experimental ", correct: false },
    ],
  },
  {
    question: "Residents of three villages with three different types of water supply were asked to participate in a study to identify cholera carriers. Because several cholera deaths had occurred in the recent past, virtually everyone occurred in the time submitted to examination. The proportion of carriers in each village who were carriers was computed and compared. The study is a:",
    answers: [
      { text: "Cross-sectional  ", correct: true },
      { text: "Case-control ", correct: false },
      { text: "Cohort study", correct: false },
      { text: " Ecological study", correct: false },
      { text: "Experimental ", correct: false },
    ],
  },
  {
    question: "500 women aged 40 – 54 who present for routine check-ups are asked about their meat consumption. 20% of the women turn out to be vegetarian. During the ensuing 5 years, 5 vegetarians and 43 non-vegetarians develop colorectal cancer. Which of the following best describes the study design?",
    answers: [
      { text: "Cohort study", correct: true },
      { text: "Case-control ", correct: false },
      { text: "Cross-sectional  ", correct: false },
      { text: " Ecological study", correct: false },
      { text: "Experimental ", correct: false },
    ],
  },
  {
    question: "The measure of association used in a cohort study is:",
    answers: [
      { text: "Relative Risk", correct: true },
      { text: "Odds Ratio", correct: false },
      { text: "Ecologic Correlation", correct: false },
      { text: "Mortality Ratio", correct: false },
      { text: "Mobility rate", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if exercise affects the risk of developing some disease.We collect data and find that 28% of people who exercise regularly develop this disease while 50% of people who do not exercise regularly develop this disease. In this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(event in treatment group) / P(event in control group)", correct: true },
      { text: "Relative Risk = P(event in treatment group)+ P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)- P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)= P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)* P(event in control group)", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if exercise affects the risk of developing some disease. We collect data and find that 28% of people who exercise regularly develop this disease while 50% of people who do not exercise regularly develop this disease. In this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(disease with exercise) + P(disease with no exercise)", correct: true },
      { text: "Relative Risk = P(disease with exercise) / P(disease with no exercise)", correct: false },
      { text: "Relative Risk = P(disease with exercise)- P(disease with no exercise", correct: false },
      { text: "Relative Risk = P(disease with exercise) *P(disease with no exercise)", correct: false },
      { text: " Relative Risk = P(disease with exercise)= P(disease with no exercise)", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if some new studying program affects the ability of students to pass a particular exam. We collect data and find that 40% of students who use the new studying program pass the exam while 40% of students who do not use the studying program also pass the exam. In this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(event in treatment group) / P(event in control group)", correct: true },
      { text: "Relative Risk = P(event in treatment group)+ P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)- P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)= P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)* P(event in control group)", correct: false },
    ],
  },
  {
    question: "The association between breast cancer and use calcium supplements was found to be as follows: The Odds ratio can be estimated as: (Look at the Att #1)",
    answers: [
      { text: "     75*75/25*25", correct: true },
      { text: "  75*25/25*25", correct: false },
      { text: "25*25/75*75", correct: false },
      { text: "   75/75*25*25", correct: false },
      { text: " 75+75*25+25", correct: false },
    ],
  },
  {
    question: "The association between coronary heart diseases and smoking was found to be as follows: The Odds ratio can be estimated as: (Look at the Att #1)",
    answers: [
      { text: " 80*50/70*40", correct: true },
      { text: "   80*70*40*50", correct: false },
      { text: "    80+70/40+50", correct: false },
      { text: " 80*40*70*50", correct: false },
      { text: "80/50*70*40", correct: false },
    ],
  },
  {
    question: "The association between Esophageal cancer and smoking was found to be as follows: The Odds ratio can be estimated as: (Look at the Att #1)",
    answers: [
      { text: "   100*80/100*60", correct: true },
      { text: "   100*80*100*60", correct: false },
      { text: "    100/100*60*80", correct: false },
      { text: "100+100/60+80", correct: false },
      { text: " 100/100*60/80", correct: false },
    ],
  },
  {
    question: "A longitudinal or prospective study is also referred to as an",
    answers: [
      { text: "cohort study", correct: true },
      { text: "cross-sectional study", correct: false },
      { text: "ecological study", correct: false },
      { text: "case-control study", correct: false },
      { text: "Clinical trial", correct: false },
    ],
  },
  {
    question: "Describe the disadvantages of the case control study",
    answers: [
      { text: "the measurement of exposure may be inaccurate. Representativeness of cases and controls may be unknown and may provide indirect estimates of risk. The temporal relationship between exposure factor and outcome cannot always be determined.", correct: true },
      { text: "A cohort is different because an entire cohort of exposed individuals is examined. ", correct: false },
      { text: "For an observational designed study, the observer does not have control over the exposure factor. ", correct: false },
      { text: "Refers to the difference between the odds of a disease in the exposed group and the incidence rate in the non-exposed group.", correct: false },
      { text: "For an observational designed study, the observer does not have control over the exposure factor.", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between natural childbirth and retinal disinsertion in myopia. The Risk Ratio  in this study is: ",
    answers: [
      { text: "(45/45+455)/(20/20+280)=", correct: true },
      { text: "45*280/20*455=", correct: false },
      { text: "45/500*20/280=", correct: false },
      { text: "(45/500-45)/(20/300-20)=", correct: false },
      { text: "45*20/455*280=", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between natural childbirth and retinal disinsertion in myopia. The Relative Risk  in this study is: ",
    answers: [
      { text: "(45/45+455)/(20/20+280)=", correct: true },
      { text: "45*280/20*455=", correct: false },
      { text: "45/500*20/280=", correct: false },
      { text: "(45/500-45)/(20/300-20)=", correct: false },
      { text: "45*20/455*280=", correct: false },
    ],
  },
  {
    question: "A study was carried out to find out association between natural childbirth and retinal disinsertion in myopia. The Odd Ratio  in this study is: ",
    answers: [
      { text: "45*280/20*455=", correct: true },
      { text: "(45/45+455)/(20/20+280)=", correct: false },
      { text: "45/500*20/280=", correct: false },
      { text: "(45/500-45)/(20/300-20)=", correct: false },
      { text: "45*20/455*280=", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if some new studying program affects the ability of students to pass a particular exam. We collect data and find that 40% of students who use the new studying program pass the exam while 40% of students who do not use the studying program also pass the exam.In this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(pass with new program) / P(pass without new program)", correct: true },
      { text: "Relative Risk = P(pass with new program) + P(pass without new program)", correct: false },
      { text: "Relative Risk = P(pass with new program) - P(pass without new program)", correct: false },
      { text: "Relative Risk = P(pass with new program)* P(pass without new program", correct: false },
      { text: "Relative Risk = P(pass with new program)= P(pass without new program)", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if smoking affects the risk of developing lung cancer. We collect data and find that 70% of people who smoke develop lung cancer while 5% of people who do not smoke develop lung cancer. In this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(event in treatment group) / P(event in control group)", correct: true },
      { text: "Relative Risk = P(event in treatment group)+ P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)- P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)= P(event in control group)", correct: false },
      { text: "Relative Risk = P(event in treatment group)* P(event in control group)", correct: false },
    ],
  },
  {
    question: "Suppose we want to know if smoking affects the risk of developing lung cancer. We collect data and find that 70% of people who smoke develop lung cancer while 5% of people who do not smoke develop lung cancerIn this scenario, we would calculate the relative risk as:",
    answers: [
      { text: "Relative Risk = P(lung cancer with smoking) / P(lung cancer without smoking", correct: true },
      { text: "Relative Risk = P(lung cancer with smoking)- P(lung cancer without smoking)", correct: false },
      { text: "Relative Risk = P(lung cancer with smoking)+ P(lung cancer without smoking ", correct: false },
      { text: "Relative Risk = P(lung cancer with smoking) = P(lung cancer without smoki", correct: false },
      { text: "Relative Risk = P(lung cancer with smoking) *P(lung cancer without smo", correct: false },
    ],
  },
  {
    question: "Priority areas of application of epidemiological case-control studies are:",
    answers: [
      { text: "Rare causes of disease", correct: true },
      { text: "Rare diseases and one consequence of different causes", correct: false },
      { text: "Different effects of one cause", correct: false },
      { text: "Possible expected outcome", correct: false },
      { text: "Chronic disease", correct: false },
    ],
  },
  {
    question: "A key feature of a cross-sectional study is that:",
    answers: [
      { text: "It usually provides information on prevalence rather than incidence", correct: true },
      { text: "It is limited to health exposures and behaviors rather than health outcomes", correct: false },
      { text: "It is more useful for analytic epidemiology than it is for descriptive epidemiology ", correct: false },
      { text: "It is synonymous with cluster", correct: false },
      { text: "neither above", correct: false },
    ],
  },
  {
    question: "Researchers conduct analytical study of pancreatic cancer. The study included 200 cases and 200 controls. Of the cases, 80% reported they smoked cigarettes. Among the controls, 50% reported they smoked cigarettes.What is the measure of association that you will use?     ",
    answers: [
      { text: "OR", correct: true },
      { text: "RR", correct: false },
      { text: "Percentage ", correct: false },
      { text: "Proportion", correct: false },
      { text: "Rate", correct: false },
    ],
  },
  {
    question: "A study with a randomly selected control group and the presence of exposure on the part of the researcher is called:",
    answers: [
      { text: " Randomized controlled clinical trial", correct: true },
      { text: "Non-randomized trial", correct: false },
      { text: "Observational study", correct: false },
      { text: "Retrospective study", correct: false },
      { text: "Cohort study", correct: false },
    ],
  },
  {
    question: "The concept of \"gold standard\" includes",
    answers: [
      { text: "Double-blind placebo-controlled randomized trials", correct: true },
      { text: "Simple non-randomized studies", correct: false },
      { text: "Triple blind studies", correct: false },
      { text: "Double-blind non-randomized trials", correct: false },
      { text: "Field trial", correct: false },
    ],
  },
  {
    question: "A study in which patients are randomly assigned to groups is called:",
    answers: [
      { text: "Randomized", correct: true },
      { text: "Non-randomized", correct: false },
      { text: "Placebo-controlled", correct: false },
      { text: "Single-blind", correct: false },
      { text: "Stratified ", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. What is the outcome in the study?       ",
    answers: [
      { text: "AIDS ", correct: true },
      { text: "HIV", correct: false },
      { text: "Followed antiretroviral regimen", correct: false },
      { text: "Did not follow antiretroviral regimen", correct: false },
      { text: "Antiretroviral therapy  ", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. What is the type of study?        ",
    answers: [
      { text: "Cohort", correct: true },
      { text: "Case-control", correct: false },
      { text: "Cross-Sectional", correct: false },
      { text: "Clinical trial", correct: false },
      { text: "Ecological ", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. What is the measure of association that you will use?   ",
    answers: [
      { text: "RR", correct: true },
      { text: "OR", correct: false },
      { text: "Percentage", correct: false },
      { text: "Proportion", correct: false },
      { text: "Attributable risk", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. Fill out two by two table",
    answers: [
      { text: "A, B,C,D= 5, 45, 5, 45", correct: true },
      { text: "A, B,C,D= 5, 5, 45, 45", correct: false },
      { text: "A, B,C,D= 45, 45, 5, 5", correct: false },
      { text: "A, B,C,D= 5, 45, 5, 90", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 HIV positive participants, 50 of them strictly followed antiretroviral regimen and other 50 did not, researchers followed the participants for 5 years in order to identify effect of “strictly follow the regimen” and development of AIDS Results of interview: The prevalence of AIDS among participants was 10%. Out of all participants who had AIDS 5 strictly followed the regimen. Provide proportion for calculation the association based on the numbers in the table ",
    answers: [
      { text: "5/5+45  /  5/5+45", correct: true },
      { text: "5*45  /  5*45", correct: false },
      { text: "5/50  / 45/ 100", correct: false },
      { text: "5*50 / 45*10", correct: false },
      { text: "5+50  /  45+10", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 strictly followed the prescriptions of statins (HMG-CoA reductase inhibitors) and 50 took statins time to times. The main goal of the study was to identify effect of statins on development of stroke. Scientists followed participants for 2 years and identified how many developed stroke Results of medical cards review: 10% of participants developed a stroke. Out of all participants who developed stroke 6 took statins regularly. What is the exposure in the study?   ",
    answers: [
      { text: "Strictly followed prescription", correct: true },
      { text: "Statins", correct: false },
      { text: " Other disorders", correct: false },
      { text: "CVD", correct: false },
      { text: "Stroke", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 strictly followed the prescriptions of statins (HMG-CoA reductase inhibitors) and 50 took statins time to times. The main goal of the study was to identify effect of statins on development of stroke. Scientists followed participants for 2 years and identified how many developed stroke Results of medical cards review: 10% of participants developed a stroke. Out of all participants who developed stroke 6 took statins regularly. What is the outcome in the study?       ",
    answers: [
      { text: "Stroke", correct: true },
      { text: "Statins", correct: false },
      { text: " Other disorders", correct: false },
      { text: "CVD", correct: false },
      { text: "Strictly followed prescription", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 strictly followed the prescriptions of statins (HMG-CoA reductase inhibitors) and 50 took statins time to times. The main goal of the study was to identify effect of statins on development of stroke. Scientists followed participants for 2 years and identified how many developed stroke Results of medical cards review: 10% of participants developed a stroke. Out of all participants who developed stroke 6 took statins regularly. What is the type of study?        ",
    answers: [
      { text: "Cohort", correct: true },
      { text: "Case-control", correct: false },
      { text: "Cross-Sectional", correct: false },
      { text: "Clinical trial", correct: false },
      { text: "Ecological ", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 strictly followed the prescriptions of statins (HMG-CoA reductase inhibitors) and 50 took statins time to times. The main goal of the study was to identify effect of statins on development of stroke. Scientists followed participants for 2 years and identified how many developed stroke Results of medical cards review: 10% of participants developed a stroke. Out of all participants who developed stroke 6 took statins regularly. What is the measure of association that you will use?   ",
    answers: [
      { text: "RR", correct: true },
      { text: "OR", correct: false },
      { text: "Percentage", correct: false },
      { text: "Proportion", correct: false },
      { text: "Attributable risk", correct: false },
    ],
  },
  {
    question: "Researchers recruited 100 participants with CVD. 50 strictly followed the prescriptions of statins (HMG-CoA reductase inhibitors) and 50 took statins time to times. The main goal of the study was to identify effect of statins on development of stroke. Scientists followed participants for 2 years and identified how many developed stroke Results of medical cards review: 10% of participants developed a stroke. Out of all participants who developed stroke 6 took statins regularly. Provide proportion for calculation the association based on the numbers in the table ",
    answers: [
      { text: "6/44+6 / 4/4+46", correct: true },
      { text: "4*46 /  6*44", correct: false },
      { text: "6*46 /  4*44", correct: false },
      { text: "50 /  4*44", correct: false },
      { text: "6/44+6 / 4/4+46", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients and identified 100 participants with positive alcohol drinking status and 100 who did not drink, in order to examine effect of alcohol consumptions on development of diabetes. Scientists followed participants for 5 years. Results of interview: The prevalence of diabetes among participants was 10%. Out of all participants who got diabetes 18 had consumed alcohol. What is the exposure in the study?   ",
    answers: [
      { text: "Alcohol consumption ", correct: true },
      { text: "Diabetes", correct: false },
      { text: "Other disorders", correct: false },
      { text: "Non drinkers", correct: false },
      { text: "CVD", correct: false },
    ],
  },
  {
    question: "Researchers interviewed 200 patients and identified 100 participants with positive alcohol drinking status and 100 who did not drink, in order to examine effect of alcohol consumptions on development of diabetes. Scientists followed participants for 5 years. Results of interview: The prevalence of diabetes among participants was 10%. Out of all participants who got diabetes 18 had consumed alcohol. What is the outcome in the study?       ",
    answers: [
      { text: "Diabetes", correct: true },
      { text: "Alcohol consumption ", correct: false },
      { text: "Other disorders", correct: false },
      { text: "Non drinkers", correct: false },
      { text: "CVD", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
