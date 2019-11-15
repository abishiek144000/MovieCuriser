/**
 * 
 */
package com.cognizant.moviecruiser.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	public static Date convertToDate(String date)throws ParseException {
		// TODO Auto-generated method stub
		return new SimpleDateFormat("dd/MM/yyyy").parse(date);

}
}