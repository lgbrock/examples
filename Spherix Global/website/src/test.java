private static Map<String, PA_Application_Income__c> processIncomeRecords(List<Data_Migration_Staging_Table__c> scope)
    {
system.debug('> DMB.processIncomeRecords');

        Map<String, PA_Application_Income__c> incomeMap 				= new Map<String, PA_Application_Income__c>();

        for(Data_Migration_Staging_Table__c migrationRecords : scope)
        {
            if(! incomeMap.containsKey(migrationRecords.PERSON_ID__c))
            {
                PA_Application_Income__c inc = new PA_Application_Income__c();
                inc.Contact__c 				 = '00374000007WoFHAA0';
                inc.Status__c 				 = 'Active';

                inc.All_Income_Received__c   = migrationRecords.ATTRIBUTE_TYPE_NM__c == 'Income Worksheet Complete Indicator' ? migrationRecords.ATTRIBUTE_STR__c == 'yes'? TRUE : FALSE : inc.All_Income_Received__c;

                incomeMap.put(migrationRecords.PERSON_ID__c, inc);
            }
system.debug('incomeMap : '+incomeMap);
            if(migrationRecords.ATTRIBUTE_TYPE_NM__c == 'Income Worksheet Complete Indicator')
            {
                if(incomeMap.containsKey(migrationRecords.PERSON_ID__c))
                {
                    incomeMap.get(migrationRecords.PERSON_ID__c).All_Income_Received__c = migrationRecords.ATTRIBUTE_STR__c == 'yes'? TRUE : FALSE;
                }
                else
                {
                    PA_Application_Income__c inc = new PA_Application_Income__c();
                    inc.Contact__c 				 = '00374000007WoFHAA0';
                    inc.Status__c 				 = 'Active';
                    inc.All_Income_Received__c   = migrationRecords.ATTRIBUTE_TYPE_NM__c == 'Income Worksheet Complete Indicator' ? migrationRecords.ATTRIBUTE_STR__c == 'yes'? TRUE : FALSE : inc.All_Income_Received__c;
                    incomeMap.put(migrationRecords.PERSON_ID__c, inc);
                }
            }
        }

system.debug('incomeMap in sub method: '+incomeMap);
system.debug('< DMB.processIncomeRecords');

        Insert incomeMap.values();

        return incomeMap;
    }
