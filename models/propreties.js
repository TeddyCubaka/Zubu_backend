const mongoose = require("mongoose");

const propretySchema = mongoose.Schema({
	_id: String,
	owner: String,
	upload_date: Date,
	update_date: [Date],
	questions: [mongoose.Types.ObjectId],
	visits: [mongoose.Types.ObjectId],
	rental_information: {
		is_available: Boolean,
		availability_date: Date,
		type_of_rental: String,
		geolocalisation: { type: String, unique: true },
		price: Number,
		guarantee_value: String,
		monetary_currency: String,
		cover_picture: String,
		address: { type: String, required: true, unique: true },
		area: String,
	},
	description: {
		gallery: [
			{
				_id: String,
				url: String,
				width: Number,
				height: Number,
				size: Number,
				upload_date: Date,
			},
		],
		charge_of_tenant: {
			electricity: Number,
			water: Number,
			dustbin: Number,
			home_care: Number,
			house_painting: Number,
			other: [
				{
					object: String,
					price: Number,
				},
			],
			total: Number,
		},
		interior: {
			bedrooms: String,
			living_room: String,
			lounge: String,
			dining_room: String,
			kitchen: String,
			attick: String,
			floor: String,
			toilet: String,
			bathroom: String,
			home_details: String,
			other: [
				{
					object: String,
					details: String,
				},
			],
		},
		external: {
			toilets: String,
			bathrooms: String,
			garage: String,
			garden: String,
			terrace: String,
			balcony: String,
			swimming_pool: String,
			home_details: String,
			other: [
				{
					object: String,
					details: String,
				},
			],
		},
		furniture: [String],
		geographic_location: {
			nearest_school_distance: [
				{
					name: String,
					geolocalisation: String,
					grade: String,
					distance: String,
				},
			],
			nearest__distance: [
				{
					name: String,
					geolocalisation: String,
					distance: String,
				},
			],
		},
	},
	contacts: {
		contact_method: String,
		phone: [],
		mail: String,
		facebook: String,
		twiter: String,
		linkendin: String,
	},
	rent_historical: [
		{
			modification_date: Date,
			what_change: [{ change: String }],
		},
	],
	statistics: {
		referencing_note: Number,
		average_views_per_week: String,
		average_grade: String,
		average_views_per_month: String,
		person_who_noted: String,
		average_visits_per_week: String,
		views_per_week: [
			{
				start_time: Date,
				end_time: Date,
				number_of_view: Number,
			},
		],
		views_per_month: [
			{
				start_time: Date,
				end_time: Date,
				number_of_view: Number,
			},
		],
	},
});

module.exports = mongoose.model("Proprety", propretySchema);