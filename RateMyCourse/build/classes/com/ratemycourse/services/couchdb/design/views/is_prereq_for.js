function(doc) { if (doc.is_course === 'Yes') { if (doc.prereq != null) emit(doc.prereq, doc.c_id);}}