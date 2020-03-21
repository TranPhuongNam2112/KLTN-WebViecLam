package com.nam.jobportal.services;

import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.nam.jobportal.models.DatabaseSequence;
@Service
public class NextSequenceService {
	
    @Autowired private MongoOperations mongo;

	public long UserAccountGenerateSequence(String seqName) {
	    DatabaseSequence counter = mongo.findAndModify(query(where("useraccount_id").is(seqName)),
	      new Update().inc("seq",1), options().returnNew(true).upsert(true),
	      DatabaseSequence.class);
	    return !Objects.isNull(counter) ? counter.getSeq() : 1;
	}
	
	public long CandidateGenerateSequence(String seqName) {
	    DatabaseSequence counter = mongo.findAndModify(query(where("candidateid").is(seqName)),
	      new Update().inc("seq",1), options().returnNew(true).upsert(true),
	      DatabaseSequence.class);
	    return !Objects.isNull(counter) ? counter.getSeq() : 1;
	}
	
}
