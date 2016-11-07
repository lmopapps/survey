package com.octopus.apps.hookup.script;

import com.octopus.apps.flowprocessbus.BSFlowEngineModel;
import com.octopus.apps.hookup.BaseScript;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

public class BGP_INITIATION_NEXT extends BaseScript {

	@Override
	public String execute(ArrayList _al) throws Exception {
		String data = (String) _al.get(0);
		prmUserId = (String) _al.get(4);
		BSFlowEngineModel mdl = (BSFlowEngineModel) _al.get(6);
		
		Map<String, Object> mapOfFields = new HashMap<String, Object>();
		mapOfFields = transformStringToMap(data);		

		if (mapOfFields != null) {
			String action = mdl.getRequest().getParameter("BUTTONACTION");
			Map<String, Object> mpClauze = new HashMap<String, Object>();
			Map<String, Object> mpClauze2 = new HashMap<String, Object>();		
			
			if (action.equals("PROCEED")) {				
				// approve
				mpClauze = new HashMap<String, Object>();		
				mpClauze.put("APPL_ID",String.valueOf(mapOfFields.get("APPL_ID")));
				mpClauze.put("LAST_USER_ID", prmUserId);
				mpClauze.put("LAST_UPDATE", "SYSDATE");
				mpClauze.put("APPL_STATUS","S");
				
				getDao().executeProcedureDSWithCn("cn1","DSPNY_APL_STATUS$PNY_TX_APPLICATION_UPDATE", mpClauze);
			}		
			else if (action.equals("REJECT")) {
				// approve
				mpClauze2 = new HashMap<String, Object>();		
				
				mpClauze2.put("APPL_ID",String.valueOf(mapOfFields.get("APPL_ID")));
				mpClauze2.put("LAST_USER_ID", prmUserId);
				mpClauze2.put("LAST_UPDATE", "SYSDATE");
				mpClauze2.put("APPL_STATUS","N");
				
				getDao().executeProcedureDSWithCn("cn1","DSPNY_APL_STATUS$PNY_TX_APPLICATION_UPDATE", mpClauze2);
			}
		}		
		return data;
	}	

	private Map<String, Object> transformStringToMap(String _stringOfGson)
			throws Exception {
		Map<String, Object> map = new HashMap<String, Object>();
		map = (Map<String, Object>) (new Gson()).fromJson(_stringOfGson,map.getClass());

		List<Object> objLS = null;

		for (Map.Entry<String, Object> ie : map.entrySet()) {
			if (ie.getKey().equals("DSPNY_INITIATION")) {
				objLS = (ArrayList<Object>) ie.getValue();

				if (objLS != null && !objLS.isEmpty()) {
					return (Map<String, Object>) objLS.get(0);
				}

			}

		}
		return null;
	}
	private List<Object> transformStringToMapAll(String _stringOfGson) throws Exception{
        Gson gson = new Gson(); 
        Map<String, Object> map = new HashMap<String, Object>();
        map = (Map<String, Object>) gson.fromJson(_stringOfGson, map.getClass());
        List<Object> objLS=null;
        for (Map.Entry<String, Object> ie : map.entrySet()) {
        	if (ie.getKey().equals("DSPNY_INITIATION")) {
        		objLS = (List<Object>) ie.getValue();
        		return objLS;
        	}
        }
        return null;
    }
}